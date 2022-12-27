import { json, LoaderArgs } from "@remix-run/node"; // or cloudflare/deno
import { useLoaderData } from "@remix-run/react";
import { GistsService } from "~/services/gists.service";
import { hasUserVisited, userPrefs } from "~/utils/cookies";
// import { requireUserSession } from "~/session";

const gistsService = new GistsService();

export async function loader({ request }: { request: Request }) {
  const cookieHeader = request.headers.get("Cookie");
  const hasUserVisitedPage = await hasUserVisited.parse(cookieHeader);
  const cookie = (await userPrefs.parse(cookieHeader)) || {};

  console.log("hasUserVisitedPage", hasUserVisitedPage);
  

  const message = hasUserVisitedPage
    ? "Hey, I know you! Welcome back!"
    : "Hello, I haven't met you before";
  // const session = await requireUserSession(request);
  console.log("message=>", message);

  // console.log("session====>", session.get("userId"));
  const gists = await gistsService.getgists();

  // console.log("gists====>", gists);

  return json(
    gists.map((gist: any) => ({
      description: gist.description,
      url: gist.html_url,
      files: Object.keys(gist.files),
      owner: gist.owner.login,
    })),
    {
      headers: {
        "Set-Cookie": await hasUserVisited.serialize({}),
      },
    }
  );

  // if (!res.ok) {
  //   throw new Error("gists is not OK!");
  // }
}

export default function Gists() {
  const gists = useLoaderData<typeof loader>();
  return (
    <ul>
      {gists.map((gist: any) => (
        <li key={gist.id}>
          <a href={gist.url}>
            {gist.description}, {gist.owner}
          </a>
          <ul>
            {gist.files.map((key: any) => (
              <li key={key}>{key}</li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}
