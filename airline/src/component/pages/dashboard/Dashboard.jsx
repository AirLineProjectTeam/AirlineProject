import { Link } from 'react-router-dom'; 
import React, {useEffect} from 'react';
import instance from "../../firebase/instance";
import AddTicket from './formDashboard/AddTicket';



  
  

    function Dashboard() {
        

        return(
          

   <>
      <AddTicket/>
  </>
        );

      }
      
      export default Dashboard;


      