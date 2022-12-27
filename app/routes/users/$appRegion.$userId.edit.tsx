import { useParams } from "@remix-run/react";

export default function AppRegionUserIdPage() {
  const { appRegion, userId } = useParams();
  return (
    <div>
      EDIT $appRegion {appRegion && appRegion} $userId {userId && userId}{" "}
    </div>
  );
}
