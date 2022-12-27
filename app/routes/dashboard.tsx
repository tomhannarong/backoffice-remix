import { fetch, json, LoaderArgs, LoaderFunction } from "@remix-run/node";
import {
  Form,
  Link,
  Outlet,
  useFetcher,
  useLoaderData,
  useTransition,
} from "@remix-run/react";
import { useMemo } from "react";
import { hasUserLoggedIn, hasUserPO } from "~/utils/cookies";

// export const handle = {
//   breadcrumb: () => <Link to="">PEOPLE_PAGE</Link>,
// };

// type LoaderData = {
//   users: IUserResponse[];
// };

export const loader: LoaderFunction = async ({ request }: LoaderArgs) => {
  const cookieHeader = request.headers.get("Cookie");
  const cookie = await hasUserLoggedIn.parse(cookieHeader);

  console.log("cookie.showToBanner", cookie?.showToBanner || false);
  console.log("cookie.roleUser", cookie?.roleUser || ["Guest"]);

  if (cookie) {
    return json({
      showToBanner: cookie.showToBanner,
      roleUser: cookie.roleUser,
    });
  }

  return json(
    {
      showToBanner: true,
      roleUser: ["PO", "ADMIN", "SUPPORT"],
    },
    {
      headers: {
        "Set-Cookie": await hasUserLoggedIn.serialize({
          showToBanner: true,
          roleUser: ["PO", "ADMIN", "SUPPORT"],
        }),
      },
    }
  );
};

export default function DashboardRoute() {
  const { showToBanner, roleUser } = useLoaderData<typeof loader>();
  const { state } = useTransition();
  const busy = state === "submitting";

  // const users = useFetcher<LoaderData>();

  return (
    <div>
      <h1>Dashboard of S'App</h1>
      {showToBanner ? <h1>showToBanner</h1> : null}
      {roleUser ? <h1>{roleUser.text}</h1> : null}
      <Outlet />
      ==========================
      <Form action="/dashboard-search" method="get">
        <div>
          <label>
            ID: <input type="text" name="q" width="200px" />
          </label>
        </div>
        <div>
          <button type="submit" disabled={busy}>
            {busy ? "Searching..." : "Search"}
          </button>
        </div>
      </Form>
    </div>
  );
}
