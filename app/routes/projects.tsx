import { HeadersFunction, LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { ProjectProps } from "~/types";

export const loader: LoaderFunction = async () => {
  const repositoriesResp = await fetch(
    "https://api.github.com/users/atilafassina/repos"
  );
  return repositoriesResp.json();

  //   return new Response(pdf, {
  //     headers: {
  //       "Content-Disposition": "attachment;",
  //       "Content-Type": "application/pdf",
  //     },
  //   });
};

export const headers: HeadersFunction = ({ loaderHeaders, parentHeaders }) => ({
  ...parentHeaders,
  ...loaderHeaders,
  "x-magazine": "smashing",
  "Cache-Control": "max-age: 60, stale-while-revalidate=3600",
});

export default function Projects() {
  // const repositoryList: ProjectProps[] = useLoaderData();
  // return <div>{repositoryList && repositoryList.length}</div>;
}
