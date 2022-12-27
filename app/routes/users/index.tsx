import { Link, useMatches } from "@remix-run/react";
import siteMap from "~/constants/paths";

export const handle = {
  breadcrumb: () => (
    <Link style={{ color: "red" }} to={siteMap.UsersPage.path}>
      USERS
    </Link>
  ),
};

export default function UsersPage() {
  return (
    <div>
      <h1>UsersPage</h1>

      {/* <Link to={siteMap.UserIdEditPageFnc({ userId: "5555" }).path}>
        Edit User 55555
      </Link> */}
    </div>
  );
}
