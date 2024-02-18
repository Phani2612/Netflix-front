import React from 'react'
import {BrowserRouter, Link , Routes , Route, useNavigate} from "react-router-dom"
import "../App.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import Another from './Anothercomponent'
import '../App.css'





function Navbar(props) 
{
  
  function changethepath()
  {
       console.log('here in component')
       window.location.pathname = ''
       props.data(true)
  }
  
  return (

    <div style={{display: "flex", alignItems: "center"}}>
         
         
    
        
        

            
                <img onClick={function()
                {
                  changethepath()
                }} width="150px"   height="70px" src="https://i.pcmag.com/imagery/reviews/05cItXL96l4LE9n02WfDR0h-5.fit_scale.size_760x427.v1582751026.png" alt='netflix'/>
                <Link to = '/Tv'  style={{color:"white" , paddingLeft:"20px",textDecoration:"None",fontSize:"20px"}} className='link' >Tv Shows</Link>
                <Link to='/upcoming' style={{color:"white",paddingLeft:"20px",textDecoration:"None",fontSize:"20px"}} className='link' >Upcoming</Link>
                <Link to = '/recent' style={{color:"white",paddingLeft:"20px",textDecoration:"None",fontSize:"20px"}} className='link'>Recently Added</Link>
                <Link  to='/mylist' style={{color:"white",paddingLeft:"20px",textDecoration:"None",fontSize:"20px"}} className='link'>My List</Link>
                
    </div>
  )
}

export default Navbar
