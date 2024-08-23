import React from 'react'
import Navbar from "../components/UI/Navbar";
import Mechanic from "../components/Mechanic"

function HireMechanic() {
  return (
    <div className="flex flex-col  min-h-screen">
      
    <Navbar />
    <Mechanic />
    

    </div>
  )
}

export default HireMechanic;