import { PrivateRoute } from "@/components/private-route";
import { Layout } from "@/components/templates/layout";
import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/a/_layout")({
  component: () => <LayoutComponent />,
});

function LayoutComponent() {
  return (
    <PrivateRoute>
      <Layout>
        <Outlet />
      </Layout>
    </PrivateRoute>
  );
}
