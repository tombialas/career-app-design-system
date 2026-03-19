import { Grid, GridCol } from "../../../../components/organisms/GridLayout";
import { Card } from "../../../../components/organisms/Card";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Tone of Voice · Career Design System",
  description: "Brand guidelines: tone of voice.",
};

export default function ToneOfVoiceDocsPage() {
  return (
    <Grid gap="lg" className="max-w-[1200px] mx-auto px-4 lg:px-8 pt-8">
      <GridCol lgSpan={9} className="space-y-6">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-wider text-ds-text-muted">Category</p>
          <h2 className="text-3xl font-semibold tracking-tight text-ds-text-primary">Tone of Voice</h2>
        </div>

        <Card>
          <div className="space-y-2">
            <p className="text-sm text-ds-text-secondary">Documentation placeholder for tone of voice.</p>
            <div className="text-sm text-ds-text-secondary">Coming soon.</div>
          </div>
        </Card>
      </GridCol>
      <GridCol lgSpan={3} />
    </Grid>
  );
}

