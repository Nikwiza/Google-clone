import { useSearchParams } from "next/navigation";
import Link from "next/link";

type ResultType = {
  title:string,
  snippet:string
}

type URLSearchParams = ReturnType<typeof useSearchParams>

export default async function WebSearchPage({searchParams}:{searchParams:{searchTerm:string}}) {
  const response = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}`
  );

  if(!response.ok){
    throw new Error("Something went wrong!")
  }
  const data = await response.json();

  const results = data.items;

  if(!results){
    return <div className="flex flex-col justify-center items-center pt-10">
      <h1 className="text-3xl mb-4">No results found</h1>
      <p className="text-lg">Try searching for something else or go back to </p>
      <Link href = "/" className="text-blue-500">
        HOME
      </Link>
    </div>
  }

  return (
    <>
    {results && results.map((result:ResultType) => 
    <h1>
       {result.title}
    </h1>)}</>
  )
}
