import { ActionFunction, LinksFunction, LoaderFunction } from "@remix-run/node";
import { useCatch, useParams } from "@remix-run/react";
import style404 from "../styles/404.style.css";
import style403 from "../styles/403.style.css";

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: style403 },
    { rel: "stylesheet", href: style404 },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css?family=Cabin:400,700",
    },
  ];
};

// export const loader: LoaderFunction = async ({ params }) => {
//   return (params["*"] || "").split("/");
// };

// export const action: ActionFunction = async ({ params }) => {
//   return (params["*"] || "").split("/");
// };

export default function SplatRoute() {
  const params = useParams();
  const str = (params["*"] || "").split("/").join("/");
  console.log("str => ", str);

  return <Page403 />;
}

export function CatchBoundary() {
  const caught = useCatch();
  console.log("SplatRoute ====>", caught);
}

const Page404 = () => {
  return (
    <div id="notfound">
      <div className="notfound">
        <div className="notfound-404">
          <div></div>
          <h1>404</h1>
        </div>
        <h2>Page not found</h2>
        <p>
          The page you are looking for might have been removed had its name
          changed or is temporarily unavailable.
        </p>
        <a href="#">home page</a>
      </div>
    </div>
  );
};

const Page403 = () => {
  return (
    <div>
      <div className="gandalf">
        <div className="fireball"></div>
        <div className="skirt"></div>
        <div className="sleeves"></div>
        <div className="shoulders">
          <div className="hand left"></div>
          <div className="hand right"></div>
        </div>
        <div className="head">
          <div className="hair"></div>
          <div className="beard"></div>
        </div>
      </div>
      <div className="message">
        <h1>403 - You Shall Not Pass</h1>
        <p>
          Uh oh, Gandalf is blocking the way!
          <br />
          Maybe you have a typo in the url? Or you meant to go to a different
          location? Like...Hobbiton?
        </p>
      </div>
    </div>
  );
};
