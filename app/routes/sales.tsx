import { ErrorBoundaryComponent } from "@remix-run/node";
import { Link, Outlet } from "@remix-run/react";
// import siteMap from "~/constants/paths";

// export const handle = {
//   breadcrumb: () => <Link to={siteMap.PeoplePage.path}>PEOPLE_PAGE</Link>,
// };

export default function SalesRoute() {
  return (
    <div>
      <h1>Sales</h1>
      <div>
        <button>
          <span>Overview</span>
        </button>{" "}
        <button>
          <span>subscriptions</span>
        </button>{" "}
        <button>
          <Link to="/sales/invoices">
            <span style={{ color: "red" }}>invoices</span>
          </Link>
        </button>{" "}
        <button>
          <span>Customers</span>
        </button>{" "}
        <button>
          <span>Deposits</span>
        </button>{" "}
      </div>
      <p style={{ backgroundColor: "blue" }}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita,
        veritatis nesciunt praesentium at ipsum fugit obcaecati. Rerum libero
        quasi commodi sint magni, labore ut? Dignissimos quae ut consectetur
        laudantium eveniet.
      </p>

      <Outlet />
    </div>
  );
}

export const ErrorBoundary: ErrorBoundaryComponent = ({ error }) => {
  return (
    <div style={{ backgroundColor: "beige" }}>
      {"ERROR FROM SALES ROUTE"}
      <h1>Error</h1>
      <p>{error.message}</p>
      <p>The stack trace is:</p>
      <pre>{error.stack}</pre>
    </div>
  );
};
