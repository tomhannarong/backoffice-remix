import { json, LoaderArgs, LoaderFunction } from "@remix-run/node";

export const loader: LoaderFunction = async ({ request }: LoaderArgs) => {
  //   const q = (
  //     new URL(request.url).searchParams.get("q") ?? ""
  //   ).toLocaleLowerCase();
  //   console.log("url =>", q);
  //   // return json()
  //   const response = await fetch(
  //     `https://jsonplaceholder.typicode.com/users/${params.dashboardSlug}`
  //   );
  //   if (!response.ok) throw new Error("User not found");
  //   const data: LoaderData = {
  //     userItem: (await response.json()) || null,
  //   };
  //   return data;
};
