import React from 'react'
import { useRouter } from 'next/router'

export default function SearchOption({title,Icon}) {
  
    const router = useRouter()

    function selTab(title) {

        router.push(`/search?term=${router.query.term}&searchType=${title==="Images"?"Images":""}`)


        
    }
  
    return (
    <div onClick={()=>selTab(title)}>

        <Icon className="w-4" />
        <p>{title}</p>

    </div>
  )
}
