import React from 'react'
import Header from '../../components/Header'
import {getProviders,signIn} from "next-auth/react"

export default function signin({providers}) {
  return (


    <>
    
    <Header />
   
   <div>
    {Object.values(providers).map(provider=>(

        <div className='flex flex-col  items-center' key={provider.name}>

            <img className='w-52 object-cover mt-40 mb-10' src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png" alt="google-logo" />
            <button className='bg-red-400 rounded-lg text-white p-3 hover:bg-red-500' onClick={()=>signIn(provider.id,{callbackUrl:"/"})}>Sign in with {provider.name}</button>
        


        </div>






    ))}
  
    

    
    
    
    
    </div>
    </>
  );
}


export async function getServerSideProps(){

    const providers = await getProviders();
    return {

        props:{providers},
    
    }; 


}
