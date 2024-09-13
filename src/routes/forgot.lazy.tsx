import { ForgotPage } from "@/pages/forgot";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/forgot")({
    component: () => <ForgotPage />,
});
