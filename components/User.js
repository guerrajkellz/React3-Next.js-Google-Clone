import React from 'react'
import {useSession,signIn,signOut} from "next-auth/react"
import Image from 'next/image'

export default function User({className}) {

  const {data: session} = useSession();
  
    if(session){
      return(
        <>
        <img  onClick={signOut} src={session.user.image} className={`h-10 w-10 rounded-full hover:bg-gray-200 cursor-pointer p-1 ${className}`}/>      
        </>


      )



    }


  return (
    
        <>
        
        
        <button 
        
          className={`bg-blue-400 text-white px-6 py-2 font-medium rounded-md hover:bg-blue-500 ${className}`} 
          onClick={signIn}
          
          >
          SignIn</button>
        
        
        
        </>

  );
}
