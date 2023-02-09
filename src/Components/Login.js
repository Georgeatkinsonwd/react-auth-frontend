import React from 'react'
import { useState } from 'react'
import Axios from 'axios'
import {Navigate} from 'react-router-dom'

function Login() {
  // Axios.defaults.withCredentials = true;
  // Axios.defaults.baseURL = "http://localhost:3001/login";
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [redirect, setRedirect] = useState(false)

  const loginUser =  async (e) => {
    e.preventDefault()
    try {
      Axios.post('http://localhost:3001/login',{
      username,
      password,
    }).then((res)=>{
      if(res.data ==='ok'){
        setRedirect(true)
      }
      else{
        alert('Wrong credentials')
      }
    })
    } catch (error) {
      console.error(error)
      alert('Wrong credentials')
    }
    

  }

  if(redirect){
    return <Navigate to= {'/'} />
  }

  return (
    <div>
        
        <h1>Login to your account</h1>
        
        <form onSubmit={loginUser}>
            <input value={username}
             type="text" 
             placeholder="Please enter your email"
             onChange={e => {setUsername(e.target.value)}} />
            <input value={password} 
            type="password" 
            placeholder="Please enter your password" 
            onChange={e => {setPassword(e.target.value)}}/>
            <button>Login</button>
        </form>
        </div>
  )
}

export default Login