const siteMap = {
  HomePage: {
    title: "Home",
    description: "My home page",
    path: "/",
    example: "/",
    breadcrumbName: `home`,
    available: true,
  },
  DemoPage: {
    title: "Demo Page",
    description: "My Demo page",
    path: "/demo",
    example: "/demo",
    breadcrumbName: `demo`,
    available: true,
  },
  UsersPage: {
    title: "Users Page",
    description: "My Users page",
    path: "/users",
    example: "/users",
    breadcrumbName: "Users all",
    available: true,
  },
  UsersEditPage: {
    title: "Users Page",
    description: "My Users page",
    path: "/users/:userId/edit",
    example: "/users",
    breadcrumbName: "Users all",
    available: true,
  },
  //   UserIdEditPageFnc: ({ userId }: IUserIdEditPage): ISiteMap => {
  //     return {
  //       title: "Demo Page",
  //       description: "My Demo page",
  //       path: `/users/${userId}/edit`,
  //       example: "/user/:userId/edit",
  //       breadcrumbName: `Edit User ${userId}`,
  //       available: true,
  //     };
  //   },
  PeoplePage: {
    title: "People",
    description: "My People page",
    path: "/people",
    breadcrumbName: `People`,
    available: true,
  },
  PeopleEditPage: {
    title: "People Edit",
    description: "My People Edit page",
    path: "/people",
    breadcrumbName: `People`,
    available: true,
  },
};

type IUserIdEditPage = {
  userId: string;
};

export default siteMap;
