
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

function App() {
 
  const [info , Setinfo] = React.useState(false)

  
  
  return (

    <BrowserRouter>
    <div style={{position:'relative'}}>
      

<Navbar data = {Setinfo}/>
     
        
     
        
        <div className="hoverbox" style={{border:"1px solid black", width:'200px', height:'1000px',position:'absolute' , top:'100px', marginTop:'-30px', marginLeft:'-199.9px'}}>
          
    
          
         

          <Link to='/Action'><h1 id='action' >Action</h1></Link>

          <Link to='/Romance'><h1>Romance</h1></Link>

          <Link to='/Comedy'><h1 >Comedy</h1></Link>

          <Link to='/Horror'><h1 >Horror</h1></Link>

          <Link to='/Docu'><h1 >Docu</h1></Link>

          <Link to='/Scifi'><h1 >Sci-Fi</h1></Link>

          <Link to='/India'><h1>India</h1></Link>

      
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
  );
}

export default App;

