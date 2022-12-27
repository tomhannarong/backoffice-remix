import { useParams } from "@remix-run/react";

export default function AppRegionUserIdPage() {
  const { appRegion, userId } = useParams();
  return (
    <div>
      $appRegion {appRegion && appRegion} $userId {userId && userId}{" "}
    </div>
  );
}
