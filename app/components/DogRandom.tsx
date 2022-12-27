// import { DataFunctionArgs, LoaderArgs, LoaderFunction } from "@remix-run/node";
// import { useLoaderData } from "@remix-run/react";
import {
  DataFunctionArgs,
  ErrorBoundaryComponent,
  json,
  LoaderFunction,
} from "@remix-run/node";
import { Form } from "@remix-run/react";
import { IDogRandomResponse } from "~/models/dog.model";

export const loader: LoaderFunction = async (args: DataFunctionArgs) => {
  console.log("data2 => ", args);
  return json({});
};

interface args {
  data: IDogRandomResponse;
}

export default function DogRandom(args: args) {
  // console.log("data => ", args);

  return (
    <div>
      <h1>Dog Random component</h1>

      <img src={args.data.message} alt="Flowers in Chania" />
      <Form action="." method="get">
        <button type="submit">random again</button>
      </Form>
    </div>
  );
}
