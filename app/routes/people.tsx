import { Link, Outlet } from "@remix-run/react";
// import siteMap from "~/constants/paths";

// export const handle = {
//   breadcrumb: () => <Link to={siteMap.PeoplePage.path}>PEOPLE_PAGE</Link>,
// };

export default function PeopleRoute() {
  return (
    <div>
      <h1>PEOPLE</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita,
        veritatis nesciunt praesentium at ipsum fugit obcaecati. Rerum libero
        quasi commodi sint magni, labore ut? Dignissimos quae ut consectetur
        laudantium eveniet.
      </p>

      <Outlet />
    </div>
  );
}
