import { LoaderArgs, LoaderFunction } from "@remix-run/node";
import { Link, Outlet, useLoaderData, useParams } from "@remix-run/react";
import invariant from "tiny-invariant";
import {
  getActivityByType,
  getActivityType,
  IActivityResponse,
  IActivityType,
  validateActivityType,
} from "~/models/activity.model";

type LoaderData = {
  activityType: IActivityResponse;
};

export const loader: LoaderFunction = async ({ params }: LoaderArgs) => {
  const { type } = params;
  invariant(type, "Expected params.type");

  console.log("type2 => ", type);

  //   validateActivityType(type || "");
  const activityType = await getActivityByType(type);
  const data: LoaderData = {
    activityType,
  };
  return data;
};

export default function ActivitiesTypeRoute() {
  const data = useLoaderData<LoaderData>();

  //   console.log("type => ", type);
  //   console.log("data", data);
  return (
    <div>
      <h1>activities type</h1>

      <h2>activity name: {data.activityType.activity}</h2>

      <h2>PRICE : {data.activityType.accessibility}</h2>
    </div>
  );
}
