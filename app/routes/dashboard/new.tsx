import {
  ActionArgs,
  ActionFunction,
  LoaderArgs,
  LoaderFunction,
  redirect,
} from "@remix-run/node";
import { Form } from "@remix-run/react";

export const loader: LoaderFunction = async ({ request }: LoaderArgs) => {};

export const action: ActionFunction = async ({ request }: ActionArgs) => {
  console.log("=======================");
  const form = await request.formData();
  const name = form.get("name");
  const content = form.get("content");

  // const newData = Object.fromEntries(form);
  console.log("form =>", name);
  return redirect("/dashboard");

  // const fields = { name, content };

  // if (form.get("_method") === "delete") {
  // }
};
export default function DashboardIndexRoute() {
  return (
    <div>
      <h1>NEWs</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem quas
        aspernatur id iure provident repellat accusantium culpa necessitatibus,
        ratione tempore alias veniam ex enim possimus quis nostrum nihil
        quibusdam quasi.
      </p>

      <Form action="." method="get" style={{ backgroundColor: "whitesmoke" }}>
        <div>
          <label>
            Name: <input type="text" name="name" />
          </label>
        </div>
        <div>
          <label>
            content: <textarea name="content" />
          </label>
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </Form>
    </div>
  );
}
