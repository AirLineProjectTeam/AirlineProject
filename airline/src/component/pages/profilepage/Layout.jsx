import {Outlet,Link } from "react-router-dom";


function Layout (){



return (
<>
<div class="p-16 mt-8 m-8 ">
<div class="p-8 bg-white shadow ">
  <div class="grid grid-cols-1 md:grid-cols-3">
    <div class="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0">
      <div>
        <p class="font-bold text-gray-700 text-xl">🛬</p>
        {/* <p class="text-gray-400">Friends</p> */}
      </div>
      <div>
           <p class="font-bold text-gray-700 text-xl">🗺️⁀જ✈︎</p>
        {/* <p class="text-gray-400">Photos</p> */}
      </div>
          <div>
           <p class="font-bold text-gray-700 text-xl">⋆｡˚ ✈︎ ✈️ ⋆</p>
        {/* <p class="text-gray-400">Comments</p> */}
      </div>
    </div>
    <div class="relative">
      <div class="w-48 h-48 bg-[#fafafa] mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-red-500">
  <svg xmlns="https://picsvg.com/svg/r5DyRP.jpg" class="h-24 w-24" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
</svg>
      </div>
    </div>

    <div class=" flex  md:mt-0 md:justify-center space-x-2 mt-2" >
<Link to="/profilepage"
  class="text-white py-2 px-4 uppercase rounded bg-blue-900 hover:bg-red-400 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
>
 Profile
</Link>
    <Link to="/Tickets"
  class="text-white py-2 px-4 uppercase rounded bg-pink-600 hover:bg-gray-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
>
  Tickets 
</Link>
    </div>
  </div>
  
  </div>
</div>  

<Outlet/>
  </>

)


}


export default Layout;
