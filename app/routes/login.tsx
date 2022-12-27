import { LoaderFunction, redirect } from "@remix-run/node";
import { userPrefs } from "~/utils/cookies";

export const loader: LoaderFunction = async ({ request }) => {
  const cookieHeader = request.headers.get("Cookie");
  const cookie = (await userPrefs.parse(cookieHeader)) || {};

  console.log("cookie", cookie);
  
  return redirect("/dashboard", {
    headers: {
      "Set-Cookie": await userPrefs.serialize(cookie),
    },
  });
};

export default function loginRoute() {
  return <div>login</div>;
}
