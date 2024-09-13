import { SectionPage } from "@/domians/selection";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/a/_layout/selection/")({
  component: () => <SectionPage />,
});
