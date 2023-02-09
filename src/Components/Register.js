import {useState} from 'react'
import Axios from 'axios'


function Register() {
const [username, setUsername] = useState("")
const [password, setPassword] = useState("")


const registerAccount = async (e) =>{
    e.preventDefault()
    Axios.post("http://localhost:3001/register",{
        username,
        password,
    }).then((res)=>{
        alert("Account created")
        // need a redirect
    })
}



  return (
    <div>
        <h1>Register an account</h1>
        <form className="register" onSubmit={registerAccount}>
            <input type="text" 
            value={username} 
            onChange={e => setUsername(e.target.value)}
            placeholder="Please enter a username" />

            <input type="password" 
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Please enter a password" />

            <button>Register</button>
        </form>
        </div>
  )
}

export default Register