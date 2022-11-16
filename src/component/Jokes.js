import  Axios  from 'axios'
import React from 'react'
import { useState } from 'react'
export default function Jokes() {
  const [joke,setJoke] = useState("")
  const getJoke=()=>{
    Axios.get("https://official-joke-api.appspot.com/random_joke").then((response)=>{
      
      setJoke(response.data.setup + "...."+response.data.punchline)
    } )
  }
  
  return (
    <div>
      <h3 className='text-info' onMouseOver={getJoke}>JOKE:-{joke}</h3>
          {/* <button onClick={getJoke}>Get Joke</button>  */}
      </div>
  )
}
