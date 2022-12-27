import { LinksFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import siteMap from "~/constants/paths";

// export const links: LinksFunction = () => {};

export default function IndexRoute() {
  return (
    <div>
      <Link to={siteMap.DemoPage.path}>go to demo page</Link>
    </div>
  );
}
