import React from 'react'
import '../Register.css'
import Axios from 'axios'
import Login from './Login'
import {BrowserRouter , Link , Routes , Route} from 'react-router-dom'

function Register() {
    const [data , setdata] = React.useState({

        email:'',
        password:'',
        confirm:''
    })

    const [output , Setoutput ] = React.useState('')

    function collectdetails(event)
    {
        // const {name,value} = event.target

        setdata({...data,[event.target.name] : event.target.value})
    }
    
    function collectdata(event)
    {
        event.preventDefault()

        // console.log(data)

        Axios.post('http://localhost:5000/Register', {Info : data}).then(function(output)
        {

            Setoutput(output.data)

        }).catch(function(error)
        {
            console.error(error)
        })
        
    }

  return (
    
    
    
    
    <div  class="container1">
    <form onSubmit={collectdata} class="registration-form">
        <h1>Sign Up</h1>
        <img height='100px' width = '200px' src = 'https://www.shutterstock.com/image-vector/netflix-logo-popular-american-streaming-260nw-2308205585.jpg'/>
        <input type="text" placeholder="Email" required name = 'email' onChange={collectdetails} />
        <input type="password" placeholder="Password" required name = 'password' onChange={collectdetails}/>

        <input type="password" placeholder="Confirm password"  name = 'confirm' required onChange={collectdetails}/>


        <button type="submit">Sign Up</button>
        <p class="terms">By clicking Sign Up, you agree to our <a href="#">Terms of Use</a> and acknowledge that you have read our <a href="#">Privacy Policy</a>.</p>
        <p class="login-link">Already a member? <a href="#">Sign in</a></p>
    </form>

    

    

</div>
    
    
    
    
    
    
    
    
  

  )
}

export default Register