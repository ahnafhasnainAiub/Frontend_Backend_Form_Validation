import React from 'react'
import { Outlet } from 'react-router-dom'
import ClientCount from '../Clients/ClientCount'
import Expertise from '../Expertise/Expertise'
import Hero from '../Hero/Hero'
import Industry from '../Industries/Industry'
import ProjectCard from '../Projects/ProjectCard'
import Strategy from '../Strategies/Strategy'
import Slick from '../Working/Slick'
import NavHover from '../Header/NavHover'

function Home() {
  return (
    <>
       <Hero/> 
       <Industry/>
       <ClientCount/>
       <Strategy/>
       {/* <Project/> */}
       <ProjectCard/>
       {/*    */}
       <Slick/>
       {/* <Banner/> */}
       {/* <Expertise/> */}
       {/* <Hover/> */}
       
       <Outlet/>
       
    </>
  )
}

export default Home