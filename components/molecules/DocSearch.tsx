"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { Search, ArrowRight, Command } from "lucide-react";

export type DocEntry = {
  title: string;
  description: string;
  href: string;
  category: string;
  keywords: string[];
};

type DocSearchProps = {
  entries: DocEntry[];
  placeholder?: string;
  className?: string;
};

type ScoredEntry = DocEntry & { score: number };

function scoreEntry(entry: DocEntry, terms: string[]): number {
  let total = 0;
  const title = entry.title.toLowerCase();
  const desc = entry.description.toLowerCase();
  const cat = entry.category.toLowerCase();
  const kws = entry.keywords.map((k) => k.toLowerCase());

  for (const term of terms) {
    if (!term) continue;
    let termScore = 0;

    if (title === term) {
      termScore += 100;
    } else if (title.startsWith(term)) {
      termScore += 80;
    } else if (title.includes(term)) {
      termScore += 60;
    }

    if (kws.some((k) => k === term)) {
      termScore += 50;
    } else if (kws.some((k) => k.startsWith(term))) {
      termScore += 35;
    } else if (kws.some((k) => k.includes(term))) {
      termScore += 20;
    }

    if (desc.includes(term)) {
      termScore += 15;
    }

    if (cat.toLowerCase() === term) {
      termScore += 25;
    } else if (cat.toLowerCase().includes(term)) {
      termScore += 10;
    }

    total += termScore;
  }

  return total;
}

export function DocSearch({
  entries,
  placeholder = "Search documentation…",
  className = "",
}: DocSearchProps) {
  const [query, setQuery] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [activeIndex, setActiveIndex] = React.useState(0);
  const router = useRouter();
  const inputRef = React.useRef<HTMLInputElement>(null);

  const results = React.useMemo<ScoredEntry[]>(() => {
    const trimmed = query.trim().toLowerCase();
    if (!trimmed) return [];

    const terms = trimmed.split(/\s+/).filter(Boolean);

    return entries
      .map((e) => ({ ...e, score: scoreEntry(e, terms) }))
      .filter((e) => e.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 8);
  }, [query, entries]);

  React.useEffect(() => {
    setActiveIndex(0);
  }, [results]);

  React.useEffect(() => {
    const handleGlobalKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };
    document.addEventListener("keydown", handleGlobalKey);
    return () => document.removeEventListener("keydown", handleGlobalKey);
  }, []);

  const handleSelect = (href: string) => {
    setQuery("");
    setOpen(false);
    router.push(href);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => Math.min(i + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter" && results[activeIndex]) {
      e.preventDefault();
      handleSelect(results[activeIndex].href);
    } else if (e.key === "Escape") {
      setOpen(false);
      inputRef.current?.blur();
    }
  };

  return (
    <div className={`relative w-full ${className}`.trim()}>
      <div className="relative">
        <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ds-text-muted" />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          onBlur={() => setTimeout(() => setOpen(false), 200)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className={
            "w-full rounded-full border border-ds-border-subtle bg-ds-surface-card py-3 pl-11 pr-16 text-sm " +
            "text-ds-text-primary shadow-ds-diffuse-sm placeholder:text-ds-text-muted " +
            "focus:outline-none focus:ring-2 focus:ring-ds-primary-strong focus:ring-offset-2 " +
            "transition-all duration-[var(--duration-ds-fast)]"
          }
        />
        <kbd
          className={
            "pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 hidden items-center gap-1 " +
            "rounded-lg border border-ds-border-subtle bg-ds-surface-card-soft px-2 py-1 " +
            "text-xs font-medium text-ds-text-muted sm:inline-flex shadow-sm"
          }
        >
          <Command className="h-3 w-3" />K
        </kbd>
      </div>

      {open && results.length > 0 && (
        <div className="absolute top-full z-[var(--z-ds-dropdown)] mt-2 w-full overflow-hidden rounded-3xl border border-ds-border-subtle bg-ds-surface-card shadow-ds-diffuse-md backdrop-blur-xl">
          {results.map((entry, i) => (
            <button
              key={entry.href}
              type="button"
              onMouseDown={() => handleSelect(entry.href)}
              onMouseEnter={() => setActiveIndex(i)}
              className={
                "flex w-full items-center gap-3 px-4 py-3 text-left transition-colors " +
                (i === activeIndex
                  ? "bg-ds-primary-soft"
                  : "hover:bg-ds-surface-card-soft")
              }
            >
              <div className="min-w-0 flex-1">
                <p className="truncate text-base font-medium text-ds-text-primary">
                  {entry.title}
                </p>
                <p className="truncate text-xs font-medium text-ds-text-muted mt-1">
                  {entry.category} · {entry.description}
                </p>
              </div>
              <ArrowRight className="h-4 w-4 shrink-0 text-ds-text-muted" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
