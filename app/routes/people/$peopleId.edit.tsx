import { Link } from "@remix-run/react";
import siteMap from "~/constants/paths";

export const handle = {
  breadcrumb: () => (
    <Link to={siteMap.PeopleEditPage.path.replace(":people", "444")}>
      PEOPLE EDIT 444 _PAGE
    </Link>
  ),
};

export default function PeopleEditIndex() {
  return <div>PeopleEditIndex</div>;
}
