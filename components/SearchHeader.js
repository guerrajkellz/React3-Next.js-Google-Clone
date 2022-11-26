import Image from "next/image";
import { useRouter } from "next/router";
import {XMarkIcon,MicrophoneIcon,MagnifyingGlassIcon} from "@heroicons/react/24/solid"
import User from "./User";
import { use, useRef } from "react";
import SearchHeaderOptions from "./SearchHeaderOptions";


export default function SearchHeader() {

  const router = useRouter();
  const searchInputRef = useRef(null)

  function search(event) {

      event.preventDefault();

      const term = searchInputRef.current.value

      if(!term.trim()) return;

      router.push(`/search?term=${term.trim()}&searchType=`)

    
  }

  return (
    
    <header className="sticky top-0 bg-white">
      <div className="flex w-full items-center p-6 ">
      <Image 
        onClick={()=>router.push(`/`)}
        width="120" height="40" objectFit="contain" className="cursor-pointer mr-8" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png" alt="google-logo" />
      
      
      <form className="flex flex-grow border rounded-full py-2.5 max-w-3xl shadow-lg mr-8 items-center ">
        <input className="w-full ml-4 focus:outline-none " type="text" defaultValue={router.query.term} ref={searchInputRef} />
        <XMarkIcon onClick={()=>searchInputRef.current.value=" "} className="w-5 mr-4 sm:mr-0 " />
        <MicrophoneIcon className="w-5 hidden sm:inline-flex text-blue-500 ml-5  mr-2  "/>
        <MagnifyingGlassIcon className="w-5 mr-2 hidden sm:inline-flex" />
        <button onClick={search} type="submit" hidden></button>
        


      </form>

      <User className="ml-auto" />


      


</div>

<SearchHeaderOptions />

      





    </header>
  )
}
