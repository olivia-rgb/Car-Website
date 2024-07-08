import React from 'react'
import "../../styles/navbar.css"


function Navbar() {
  return (
    <div className=''>
      <div className='bg-[#000d6b] '>
      <div className=" navbar1">
        <div className="flex gap-8">
          <div>Home </div>
          <div>Blog </div>
          <div>Pages </div>
          <div>About</div>
          <div>Contact</div>
      </div>
      <div>
          <img src="/assets/nav-img/logo.svg.png" alt="logo" />
        </div>
      <div className="flex gap-5 justify-between self-stretch">
        <div className="flex gap-2.5 my-auto">
          <div>Sign in</div>
        </div>
        <div className="justify-center px-7 py-3 text-center border border-white border-solid rounded-[46px] max-md:px-5">
          Submit Listing
        </div>
      </div>
     </div>
      </div>
    
      <div className="bg-white">
        <div className="navbar2 w-10/12 flex justify-between">
          <div>Buy a Car</div>
          <div>Rent a Car</div>
          <div>Sell Car</div>
          <div>Hire a Mechanic</div>
        </div>
      </div>



        <div className='bg-[#000d6b]'>
         <div className="navbar3">
           <div className=" flex gap-8">
               <div>Used Cars</div>
               <div>Any Model</div>
               <div>Prices</div>
           </div>
           <div >All Price</div>
           <div className=" items-start px-20 py-2 font-medium text-center whitespace-nowrap bg-white leading-[185%] rounded-md text-slate-950 max-md:px-5">
               <div>Search</div>
             </div>
         </div>
        </div>
         </div>
       );
     }
export default Navbar