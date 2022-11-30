import { fetchData } from 'next-auth/client/_utils'
import Head from 'next/head'
import React from 'react'
import SearchHeader from '../components/SearchHeader'
import SearchResults from '../components/SearchResults'
import Response from '../Response'
import { useRouter } from 'next/router'


export default function search({results}) {

    const Router = useRouter();

    console.log(results)
   
  
    return (

        

    <div>

        <Head>
            
            <title> {Router.query.term} -Search Page </title>    
            
            
        </Head> 


            <SearchHeader />

            <SearchResults results={results} />





    </div>
  )
}


 export async function getServerSideProps(context){

        let mockData = true;


        const data = mockData?Response:await fetch(


            `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CX_KEY}&q=${context.query.term}${context.query.searchType&&"&searchType=Image"}` 

        ).then((res)=>res.json())

        return {
            props: {results:data} // will be passed to the page component as props
          }

        



 }

    