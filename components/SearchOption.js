import React from 'react'
import { useRouter } from 'next/router'

export default function SearchOption({title,Icon,selected}) {
  
    const router = useRouter()

    function selTab(title) {

        router.push(`/search?term=${router.query.term}&searchType=${title==="Images"?"Images":""}`)


        
    }
  
    return (
    <div className={`mb-2 flex space-x-1 border-b-4 border-transparent hover:text-blue-500 hover:border-blue-500 ${selected && "text-blue-500 border-blue-500"}`} onClick={()=>selTab(title)}>

        <Icon className="w-4 cursor-pointer" />
        <p className='text-sm cursor-pointer'>{title}</p>

    </div>
  )
}
