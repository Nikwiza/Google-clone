"use client";

import React, { useState } from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import {BsFillMicFill} from 'react-icons/bs'
import {useRouter} from "next/navigation"



export default function HomeSearch() {
    const [input, setInput] = useState("");
    const [randomSearchLoading, setRandomSearchLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = (e:React.FormEvent) => {
      e.preventDefault();


      if(!input.trim())
        return;

      router.push(`/search/web?searchTerm=${input}`);
  }
    async function randomSearch() {
      setRandomSearchLoading(true);
      const response = await fetch("https://random-word-api.herokuapp.com/word")
      .then((res) => res.json())
      .then((data) => data[0]);

      if(!response)
        return

      router.push(`/search/web?searchTerm=${response}`);
      setRandomSearchLoading(false);
    }

    return (
      <>
        <form onSubmit={handleSubmit} className='flex w-full mt-5 mx-auto max-w-[90%] border border-gray-200
         px-5 py-3 rounded-full hover:shadow-md focus-within:shadow-md transition-shadow sm:max-w-xl lg:max-w-2xl'>
            <a onClick={handleSubmit}><AiOutlineSearch className = 'text-xl text-gray-500 mr-3'/></a>
            <input type = "text"
            onChange={(e) => setInput(e.currentTarget.value)}
            className='flex-grow focus:outline-none'
            value={input}></input>
            <BsFillMicFill className ='text-lg'/>
        </form>

        <div className='flex flex-col space-y-2 sm:space-y-0 sm:space-x-4 justify-center sm:flex-row mt-8'>
            <button onClick={handleSubmit} className='btn'>Google Search</button>
            <button disabled = {randomSearchLoading} onClick={randomSearch} className='btn flex justify-center items-center disabled:opacity-80'>
              {randomSearchLoading ? (<img src='spinner.svg' alt='Loading...' className=''></img>) :  (<> I Am Feeling Lucky </>)}
              </button>
        </div>
      </>
    )
}
