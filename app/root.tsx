import type {
  ErrorBoundaryComponent,
  LinksFunction,
  MetaFunction,
} from "@remix-run/node";
import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
  useMatches,
  useParams,
} from "@remix-run/react";
import React from "react";
import Page404 from "./components/errors/Page404";
import siteMap from "./constants/paths";

export const meta: MetaFunction = () => {
  return {
    charset: "utf-8",
    title: "BackOffice Supporter",
    viewport: "width=device-width, initial-scale=1",
    description: "BackOffice Supporter",
  };
};

export const link: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/icon?family=Material+Icons",
    },
  ];
};

export const handle = {
  breadcrumb: () => <Link to={siteMap.HomePage.path}>HOME_PAGE</Link>,
};

export default function App() {
  const matches = useMatches();
  const { dashboardSlug } = useParams();
  console.log("test: ", matches);
  return (
    <Document>
      <Layout>
        <Outlet />
      </Layout>
    </Document>
  );
}

function Document({
  children,
  title,
}: {
  children: React.ReactNode;
  title?: string;
}) {
  return (
    <html lang="en">
      <head>
        {title ? <title>{title}</title> : null}
        <Meta />
        <Links />
      </head>
      <body>
        <header>
          {/* <ol>
        {matches
          // skip routes that don't have a breadcrumb
          .filter((match) => match.handle && match.handle.breadcrumb)
          // render breadcrumbs!
          .map((match, index) => (
            <li key={index}>{match?.handle?.breadcrumb(match)}</li>
          ))}
      </ol> */}
        </header>
        {/* {dashboardSlug ?? "OOOOP"} */}
        {children}
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" ? <LiveReload /> : null}
      </body>
    </html>
  );
}
function Layout({ children }: React.PropsWithChildren<{}>) {
  return (
    <div>
      <header>
        <div>
          <Link to="/">LOGO</Link>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/dashboard">DASHBOARD</Link>
            </li>
            <li>
              <Link to="/features">FEATURES</Link>
            </li>
            <li>
              <Link to="/features/settlements">SETTLEMENT</Link>
            </li>
            <li>
              <Link to="/features/activities">ACTIVITY</Link>
            </li>
            <li>
              <Link to="/sales">SALES</Link>
            </li>
            <li>
              <Link to="/login">LOGIN</Link>
            </li>
            <li>
              <Link to="/fake-login">FAKE-LOGIN</Link>
            </li>
          </ul>
        </nav>
      </header>

      {children}
    </div>
  );
}
export function CatchBoundary() {
  const caught = useCatch();
  console.log("CODE ====>", caught);
  let component;
  switch (caught.status) {
    case 401:
      component = <p> Oops! 401 </p>;
      break;
    case 403:
      component = <p> Oops! 403 </p>;
      break;
    case 404:
      component = <Page404 />;
      break;
    case 501:
      component = <p> Oops! 501 </p>;
      break;

    default:
      throw new Error(caught.data || caught.statusText);
  }
  return (
    <Document title={`${caught.status} ${caught.statusText}`}>
      <Layout>
        <h1>
          {caught.status}: {caught.statusText}
        </h1>
        {component}
      </Layout>
    </Document>
  );
}
export const ErrorBoundary: ErrorBoundaryComponent = ({ error }) => {
  console.error("ROOT:ErrorBoundary ", error);
  return (
    <Document title="Error!">
      <Layout>
        <div style={{ backgroundColor: "gainsboro" }}>
          <h1>There was an error</h1>
          <p>message: {error.message}</p>

          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
            nesciunt voluptates ex eligendi commodi ullam animi molestias
            molestiae! Enim, soluta autem dolores ut possimus illo aliquam
            pariatur veniam dolor ipsam.
          </p>
        </div>
      </Layout>
    </Document>
  );
};
