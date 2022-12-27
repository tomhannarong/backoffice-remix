import { ActionArgs, json, LoaderArgs, LoaderFunction } from "@remix-run/node";
import { Form, useLoaderData, useTransition } from "@remix-run/react";
import { USER_ROLES } from "~/constants/user-roles";
import { hasUserLoggedIn } from "~/utils/cookies";

export async function action({ request }: ActionArgs) {
  const formData = await request.formData();
  const loggin = formData.get("loggin");
  let userRoleLogin: Object = {};

  console.log("loggin =>", loggin);
  switch (loggin) {
    case USER_ROLES.GUEST.code: {
      userRoleLogin = { ...USER_ROLES.GUEST };
      break;
    }
    case USER_ROLES.SUPPORT.code: {
      userRoleLogin = { ...USER_ROLES.SUPPORT };
      break;
    }
    case USER_ROLES.ADMIN.code: {
      userRoleLogin = { ...USER_ROLES.ADMIN };
      break;
    }
    case USER_ROLES.PRODCUT_OWNER.code: {
      userRoleLogin = { ...USER_ROLES.PRODCUT_OWNER };
      break;
    }
    case USER_ROLES.SCRUM_MASTER.code: {
      userRoleLogin = { ...USER_ROLES.SCRUM_MASTER };
      break;
    }
    case USER_ROLES.DEVELOPER.code: {
      userRoleLogin = { ...USER_ROLES.DEVELOPER };
      break;
    }
  }

  return json(
    {
      roleUser: userRoleLogin,
    },
    {
      headers: {
        "Set-Cookie": await hasUserLoggedIn.serialize({
          roleUser: userRoleLogin,
        }),
      },
    }
  );
}

export const loader: LoaderFunction = async ({ request }: LoaderArgs) => {
  const cookieHeader = request.headers.get("Cookie");
  const cookie = await hasUserLoggedIn.parse(cookieHeader);
  if (cookie) {
    return json({
      roleUser: cookie.roleUser,
    });
  }
  return json({
    roleUser: {},
  });
};

export default function FakeLoginRoute() {
  const { roleUser } = useLoaderData<typeof loader>();
  const { state } = useTransition();
  const busy = state === "submitting";

  return (
    <div>
      <h1>Fake Login</h1>

      <h2>Current Role: {roleUser.text}</h2>

      <Form method="post">
        <button
          type="submit"
          name="loggin"
          value={USER_ROLES.GUEST.code}
          disabled={busy}
        >
          {busy ? "submitting..." : <h1>{USER_ROLES.GUEST.text}</h1>}
        </button>
      </Form>

      <Form method="post">
        <button
          type="submit"
          name="loggin"
          value={USER_ROLES.SUPPORT.code}
          disabled={busy}
        >
          {busy ? "submitting..." : <h1>{USER_ROLES.SUPPORT.text}</h1>}
        </button>
      </Form>

      <Form method="post">
        <button
          type="submit"
          name="loggin"
          value={USER_ROLES.ADMIN.code}
          disabled={busy}
        >
          {busy ? "submitting..." : <h1>{USER_ROLES.ADMIN.text}</h1>}
        </button>
      </Form>

      <Form method="post">
        <button
          type="submit"
          name="loggin"
          value={USER_ROLES.SCRUM_MASTER.code}
          disabled={busy}
        >
          {busy ? "submitting..." : <h1>{USER_ROLES.SCRUM_MASTER.text}</h1>}
        </button>
      </Form>

      <Form method="post">
        <button
          type="submit"
          name="loggin"
          value={USER_ROLES.PRODCUT_OWNER.code}
          disabled={busy}
        >
          {busy ? "submitting..." : <h1>{USER_ROLES.PRODCUT_OWNER.text}</h1>}
        </button>
      </Form>

      <Form method="post">
        <button
          type="submit"
          name="loggin"
          value={USER_ROLES.DEVELOPER.code}
          disabled={busy}
        >
          {busy ? "submitting..." : <h1>{USER_ROLES.DEVELOPER.text}</h1>}
        </button>
      </Form>
    </div>
  );
}
