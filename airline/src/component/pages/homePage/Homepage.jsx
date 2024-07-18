import { Link } from 'react-router-dom'; 
import React from 'react';

function Home(){
    return(
        <>
         <ul>
           <li className="mr-5"><Link to="/Home" className="no-underline text-black">Home</Link></li>
         </ul>
        </>
    )

}
export default Home ;