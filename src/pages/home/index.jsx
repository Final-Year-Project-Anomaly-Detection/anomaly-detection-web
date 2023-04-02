import React from 'react'
import Card from "./components/Cards"
import NavBar from "./components/NavBar"
  const Home = ()=>{
    return(<div className='min-h-full h-screen min-w-full w-screen '>
      <NavBar/>
      <div className='p-10  flex flex-wrap gap-8'>
      <Card/>
      
      </div>
      
    </div>)
}
export default Home;