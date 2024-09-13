import { DirectoryPage } from "@/domians/directory";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/a/_layout/directory/")({
  component: () => <DirectoryPage />,
});
