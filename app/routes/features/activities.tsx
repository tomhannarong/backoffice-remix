import { Link, Outlet } from "@remix-run/react";

export default function ActivitiesRoute() {
  return (
    <div>
      <h1>activities of S'App</h1>
      <Outlet />
    </div>
  );
}
