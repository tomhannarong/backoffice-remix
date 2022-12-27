import { createCookie } from "@remix-run/node"; // or "@remix-run/cloudflare"

export const hasUserVisited = createCookie("has-user-visited");

export const userPrefs = createCookie("user-prefs", {
  // These are defaults for this cookie.
  // domain: "remix.run",
  secrets: ["soopersekrit"],
  path: "/",
  sameSite: "lax",
  httpOnly: true,
  secure: true,
  expires: new Date(Date.now() + 60_000),
  maxAge: 60,
});

export const hasUserAdmin = createCookie("user-admin", {
  maxAge: 604_800, // one week
});

export const hasUserPO = createCookie("user-po", {
  maxAge: 60,
});

export const hasUserLoggedIn = createCookie("user-logged-in", {
  maxAge: 60,
});
