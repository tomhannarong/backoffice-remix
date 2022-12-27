import { LoaderFunction } from "@remix-run/node";
import { Link, Outlet, useLoaderData } from "@remix-run/react";
import {
  getActivityType,
  IActivityResponse,
  IActivityType,
} from "~/models/activity.model";

type LoaderData = {
  activityType: string[];
};

export const loader: LoaderFunction = async () => {
  IActivityType.busywork;
  const data: LoaderData = {
    activityType: getActivityType(),
  };
  return data;
};

export default function ActivitiesIndexRoute() {
  const data = useLoaderData<LoaderData>();
  console.log("data", data);
  return (
    <div>
      <h1>activities type</h1>
      {data.activityType.map((actType, i) => (
        <Link to={`/features/activities/${actType}`}>
          <h2 style={{ color: "GrayText" }} key={i}>
            {actType}
          </h2>
        </Link>
      ))}
      <h2></h2>
    </div>
  );
}
