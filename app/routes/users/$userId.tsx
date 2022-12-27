import { useParams } from "@remix-run/react";

export default function UserIdPage() {
  const { userId } = useParams();
  return <div>UserIdPage {userId && userId}</div>;
}
  