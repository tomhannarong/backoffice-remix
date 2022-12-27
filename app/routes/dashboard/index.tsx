import { ErrorBoundaryComponent, LoaderFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import DogRandom from "~/components/DogRandom";
import { getDogRandom, IDogRandomResponse } from "~/models/dog.model";
import { IUserResponse } from "~/models/user.model";
import { UserService } from "~/services/profile/user.service";

type LoaderData = {
  users: Array<IUserResponse>;
  dog1: IDogRandomResponse;
  dog2: IDogRandomResponse;
  dog3: IDogRandomResponse;
  dog4: IDogRandomResponse;
  dog5: IDogRandomResponse;
};

export const loader: LoaderFunction = async () => {
  const userService = new UserService()
  const [users, dog1, dog2, dog3, dog4, dog5] = await Promise.all([
    userService.getUsers(),
    getDogRandom(),
    getDogRandom(),
    getDogRandom(),
    getDogRandom(),
    getDogRandom(),
  ]);
  const data: LoaderData = {
    users,
    dog1,
    dog2,
    dog3,
    dog4,
    dog5,
  };
  return data;
};

// https://dog.ceo/api/breeds/image/random
export default function DashboardIndexRoute() {
  const data = useLoaderData<LoaderData>();
  return (
    <div>
      <ul>
        {data.users.map((user) => (
          <li key={user.id}>
            {user.name} <br />{" "}
            <button style={{ backgroundColor: "GrayText" }}>
              <Link to={`/dashboard/${user.id}`}>{user.id}</Link>
            </button>
          </li>
        ))}
      </ul>

      <DogRandom data={data.dog1}></DogRandom>
      <DogRandom data={data.dog2}></DogRandom>
      <DogRandom data={data.dog3}></DogRandom>
      <DogRandom data={data.dog4}></DogRandom>
      <DogRandom data={data.dog5}></DogRandom>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis,
        vitae tempora! Quaerat vero repellendus, laboriosam, vel mollitia qui
        odit aliquid dolorum nesciunt minus ipsum debitis atque perferendis
        laborum quasi fuga.
      </p>
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
