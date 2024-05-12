
import Navbar from "./COMPONENTS/Navbar";

import './App.css'
import { FontAwesomeIcon,FontAwesomeIconProps } from "@fortawesome/react-fontawesome";
import Common from "./COMPONENTS/Common";
import { BrowserRouter, Link , Routes , Route } from "react-router-dom";
import Another from "./COMPONENTS/Anothercomponent";
import React from "react";
import Action from "./COMPONENTS/Action";
import Romance from './COMPONENTS/Romance'
import Comedy from "./COMPONENTS/Comedy";
import Horror from "./COMPONENTS/Horror";
import Docu from "./COMPONENTS/Docu";
import Scifi from "./COMPONENTS/Scifi";
import India from "./COMPONENTS/India";
import List from "./COMPONENTS/Mylist";
import Recent from "./COMPONENTS/Recently";
import Upcoming from "./COMPONENTS/Upcoming";
import Tv from "./COMPONENTS/Tv";
import AllinOne from "./COMPONENTS/Allinone";

function App() {
 
  const [info , Setinfo] = React.useState(false)

  
  
  return (
<div >


<BrowserRouter>
    <div  >
      

<Navbar data = {Setinfo}/>
     
        
     
        
        <div className="hoverbox" >
          
    
          
         

          <Link id="li"   to='/Action'><h1 id='action' >Action</h1></Link>

          <Link id="li"   to='/Romance'><h1>Romance</h1></Link>

          <Link  id="li" to='/Comedy'><h1 >Comedy</h1></Link>

          <Link id="li"  to='/Horror'><h1 >Horror</h1></Link>

          <Link id="li" to='/Docu'><h1 >Docu</h1></Link>

          <Link id="li"  to='/Scifi'><h1 >Sci-Fi</h1></Link>

          <Link id="li"  to='/India'><h1>India</h1></Link>

      
        </div>
        
        <Routes>
                  
      
                  <Route path='/Action' element={<Action/>}></Route>

                  

                  <Route path='/Romance' element= {<Romance/>} ></Route>

                  <Route path='/Comedy' element={<Comedy/>}></Route>

                  <Route path="/Horror" element={<Horror/>}></Route>

                  <Route path="/Docu" element={<Docu/>}></Route>

                  <Route path="/Scifi" element={<Scifi/>} ></Route>

                  <Route path="/India" element={<India/>} ></Route>

                  {info? <Route path='' data = {Setinfo} element={<Another/>}></Route> :<Route path='' data = {Setinfo} element={<Another/>}></Route>}

                  <Route path = '/recent' element = {<Recent/>}></Route>

                  <Route path = '/mylist' element = {<List/>}></Route>

                  <Route path = '/upcoming' element = {<Upcoming/>}></Route>

                  <Route path="/Tv" element = {<Tv/>}></Route> 








                
                </Routes>

    </div>

    </BrowserRouter>



</div>
  );
}

export default App;

