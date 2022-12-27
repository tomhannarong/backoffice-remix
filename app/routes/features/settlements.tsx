import { Link, Outlet } from "@remix-run/react";

export default function SettlementsRoute() {
  return (
    <div>
      <h1>Settlements of S'App</h1>
      <Outlet />
    </div>
  );
}
