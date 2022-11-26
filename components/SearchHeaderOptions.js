import React from 'react'
import SearchOption from './SearchOption'
import { MagnifyingGlassIcon,PhotoIcon } from '@heroicons/react/24/outline'




export default function SearchHeaderOptions() {
  return (
    <div className='flex'>

        <SearchOption title="ALL" Icon={MagnifyingGlassIcon}/>
        <SearchOption title="Images" Icon={PhotoIcon}  />


    </div>
  )
}
