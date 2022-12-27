import {
  ErrorBoundaryComponent,
  LoaderArgs,
  LoaderFunction,
  MetaFunction,
} from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import invariant from "tiny-invariant";
import { IUserResponse } from "~/models/user.model";
import { UserService } from "~/services/profile/user.service";

type LoaderData = {
  user: IUserResponse;
};

export const meta: MetaFunction = ({ data }) => {
  return {
    title: data ? data.name : "Oops...",
  };
};

export const loader: LoaderFunction = async ({ params }: LoaderArgs) => {
  const userService = new UserService();
  invariant(params.invoiceId, "Expected params.invoiceId");
  const user = await userService.getUserById(params.invoiceId);
  const data: LoaderData = {
    user,
  };
  return data;
};
export default function InvoiceIdRoute() {
  const data = useLoaderData<LoaderData>();
  return (
    <div style={{ backgroundColor: "gold" }}>
      <table border={1}>
        <thead>
          <th>ID</th>
          <th>NAME</th>
          <th>EMAIL</th>
          <th>ADDRESS</th>
          <th>WEBSITE</th>
        </thead>
        <tbody>
          <tr>
            <td>{data.user.id}</td>
            <td>{data.user.name}</td>
            <td>{data.user.email}</td>
            <td>
              {Object.entries(data.user.address)
                .map(([key, value]) => `${value}`)
                .join(", ")}
            </td>
            <td>{data.user.website}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export const ErrorBoundary: ErrorBoundaryComponent = ({ error }) => {
  return (
    <div style={{ backgroundColor: "gold" }}>
      {"ERROR FROM INVOICE ID ROUTE"}
      <h1>Error</h1>
      <p>{error.message}</p>
      <p>The stack trace is:</p>
      <pre>{error.stack}</pre>
    </div>
  );
};
