import { Link, useParams } from "@remix-run/react";

// export const handle = {
//   breadcrumb: () => (
//     // <Link to={siteMap.UserIdEditPageFnc({ userId: "9999" }).path}>
//     //   {siteMap.UserIdEditPageFnc({ userId: "9999" }).breadcrumbName}
//     // </Link>
//   ),
// };

export default function UserIdEditPage() {
  const { userId } = useParams();
  return <div>$userId.edit {userId && userId}</div>;
}
