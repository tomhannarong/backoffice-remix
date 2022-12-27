import { Link, Outlet } from "@remix-run/react";

export default function FeaturesRoute() {
  return (
    <div>
      <h1>Features of S'App</h1>
      <Outlet />
    </div>
  );
}
