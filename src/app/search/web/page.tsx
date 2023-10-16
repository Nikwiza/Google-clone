import { useSearchParams } from "next/navigation";

type ResultType = {
  title:string,
  snippet:string
}

type URLSearchParams = ReturnType<typeof useSearchParams>

export default async function WebSearchPage({searchParams}:{searchParams:{searchTerm:string}}) {
  const response = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}`
  );

  const data = await response.json();
  const results = data.items;

  return (
    <>
    {results && results.map((result:ResultType) => 
    <h1>
       {result.title}
    </h1>)}</>
  )
}
