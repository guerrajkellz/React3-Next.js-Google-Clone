import React from 'react'
import SearchOption from './SearchOption'
import { MagnifyingGlassIcon,PhotoIcon } from '@heroicons/react/24/outline'
import { Router } from 'next/router'
import { useRouter } from 'next/router'




export default function SearchHeaderOptions() {

    const router = useRouter()
  
    return (
    <div className='space-x-8 w-f flex justify-center lg:justify-start border-b-2 lg:pl-52 text-gray-700'>

        <SearchOption className="mr-4" title="All" Icon={MagnifyingGlassIcon} selected={router.query.searchType===""|| !router.query.searchType}/>
        <SearchOption title="Images" Icon={PhotoIcon} selected={router.query.searchType==="Images"} />


    </div>
  )
}
