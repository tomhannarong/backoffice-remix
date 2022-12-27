import {
  ErrorBoundaryComponent,
  json,
  LoaderArgs,
  LoaderFunction,
  MetaFunction,
} from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import invariant from "tiny-invariant";
import { IUserResponse } from "~/models/user.model";
import { UserService } from "~/services/profile/user.service";

const userService = new UserService();

type LoaderData = {
  user: IUserResponse;
};

export const meta: MetaFunction = ({ data }) => {
  console.log("datadatadata", data);
  return {
    title: data ? data.name : "Oops...",
  };
};

export const loader: LoaderFunction = async ({ params }: LoaderArgs) => {
  const { dashboardSlug } = params;
  invariant(dashboardSlug, "Expected params.dashboardSlug");

  const user = await userService.getUserById(dashboardSlug);
  const data: LoaderData = {
    user,
  };
  return json(data);
};
export default function dashboardSlugRoute() {
  const data = useLoaderData<LoaderData>();
  return (
    <div style={{ backgroundColor: "gold" }}>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem quas
        aspernatur id iure provident repellat accusantium culpa necessitatibus,
        ratione tempore alias veniam ex enim possimus quis nostrum nihil
        quibusdam quasi.
      </p>

      <article>
        {data.user?.email}
        <br />
        {data.user?.website}
      </article>
      <Link to=".">{data.user?.username}</Link>
    </div>
  );
}

export const ErrorBoundary: ErrorBoundaryComponent = ({ error }) => {
  return (
    <div style={{ backgroundColor: "beige" }}>
      <h1>Error</h1>
      <p>{error.message}</p>
      <p>The stack trace is:</p>
      <pre>{error.stack}</pre>
    </div>
  );
};
