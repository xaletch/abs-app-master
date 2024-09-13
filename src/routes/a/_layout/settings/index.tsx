import { SettingPage } from "@/domians/settings";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/a/_layout/settings/")({
  component: () => <SettingPage />,
});
