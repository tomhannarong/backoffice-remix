import { ErrorBoundaryComponent, LoaderFunction } from "@remix-run/node";
import { Link, Outlet, useLoaderData } from "@remix-run/react";
import { IUserResponse } from "~/models/user.model";
import { UserService } from "~/services/profile/user.service";
// import siteMap from "~/constants/paths";

// export const handle = {
//   breadcrumb: () => <Link to={siteMap.PeoplePage.path}>PEOPLE_PAGE</Link>,
// };

type LoaderData = {
  users: IUserResponse[];
};

export const loader: LoaderFunction = async () => {
  const userService = new UserService();
  const [users] = await Promise.all([userService.getUsers()]);
  const data: LoaderData = {
    users,
  };
  return data;
};

export default function InvoicesRoute() {
  const data = useLoaderData<LoaderData>();
  return (
    <div>
      <h1>Invoices</h1>

      <div style={{ backgroundColor: "grey" }}>
        <ul>
          {data.users.map((user) => (
            <li key={user.id}>
              <span>{user.name}</span>{" "}
              <button style={{ backgroundColor: "GrayText" }}>
                <Link to={`/sales/invoices/${user.id}`}>
                  invoice ID:{user.id}
                </Link>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <Outlet />
    </div>
  );
}

export const ErrorBoundary: ErrorBoundaryComponent = ({ error }) => {
  return (
    <div style={{ backgroundColor: "grey" }}>
      {"ERROR FROM INVOICES ROUTE"}
      <h1>Error</h1>
      <p>{error.message}</p>
      <p>The stack trace is:</p>
      <pre>{error.stack}</pre>
    </div>
  );
};
