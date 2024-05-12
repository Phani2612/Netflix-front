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

    <div  className='Navbar'>
         
         
    
        
        

            
                <img onClick={function()
                {
                  changethepath()
                }} width="150px"   height="70px" src="https://i.pcmag.com/imagery/reviews/05cItXL96l4LE9n02WfDR0h-5.fit_scale.size_760x427.v1582751026.png" alt='netflix'/>
                <Link to = '/Tv'  className='link' >Tv Shows</Link>
                <Link to='/upcoming'  className='link' >Upcoming</Link>
                <Link to = '/recent' className='link'>Recently Added</Link>
                <Link  to='/mylist'  className='link'>My List</Link>


                <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
   Categories
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" >

  <Link class="dropdown-item"  to='/Action'>Action</Link>

<Link class="dropdown-item"  to='/Romance'>Romance</Link>

<Link class="dropdown-item"  to='/Comedy'>Comedy</Link>

<Link class="dropdown-item" to='/Horror'>Horror</Link>

<Link class="dropdown-item" to='/Docu'>Docu</Link>

<Link class="dropdown-item"  to='/Scifi'>Scifi</Link>

<Link class="dropdown-item"  to='/India'>India</Link>
  </div>
</div>
                
    </div>
  )
}

export default Navbar
