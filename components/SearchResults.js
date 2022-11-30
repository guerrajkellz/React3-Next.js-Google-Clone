import React from 'react'
import Parser from "html-react-parser"

export default function SearchResults({results}) {
  return (

    <div className='w-full mx-auto px-3 sm:pl-[5%] md:pl-[14%] lg:pl-52 '>
    <p className='text-gray-500 mt-3 text-sm mb-10'> About {results.searchInformation.formattedTotalResults} results ({results.searchInformation.formattedSearchTime} seconds)</p>

    {results.items.map((result)=>(

        <div key={result.title} className='mb-8 max-w-xl'>
            <div className='group'>
                <a className='truncate text-sm' href={result.link}>{result.formattedUrl}</a>
                <a className='group-hover:underline decoration-blue-800' href={result.link}>
                    <h2 className='text-blue-800 text-xl font-medium truncate'>{result.title}</h2>
                </a>

            </div>

            <p className='text-gray-600'>{Parser(result.htmlSnippet)}</p>

        </div>


    ))}
    
    </div>
  )
}
