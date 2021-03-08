import {useState} from "react";
import {Button, Divider, Form, Grid, Segment, Header, Image, Message} from "semantic-ui-react"

function Login({setCurrentUser, loginForm, setLoginForm, history}) {
    
    const[username, setUsername] = useState("")
    const[password, setPassword] = useState("")
    const[errors, setErrors] = useState([])


    function handleLogin(e){
        e.preventDefault()
        const loginUser = {
            username: username,
            password: password
        }
        fetch('http://localhost:4000/login', {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(loginUser),
          })
        .then(r => r.json())
        .then((loggedUser) => {
            if (loggedUser.errors){
                setErrors(loggedUser.errors)
                
            } else {
                const { user, token } = loggedUser;
                localStorage.setItem("token", token);
                setCurrentUser(user);
                history.push('/home')
                
            }
        })

    }



    return (

        <form className="login-form" onSubmit={handleLogin} autoComplete="off">
        <input 
            type="text" 
            name="username" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            placeholder="Enter Username"/>
        <br></br>
        <br></br>
        <input 
            type="password" 
            name="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            placeholder="Enter Password"
        />
        <br></br>
        <br></br>
        {errors.map((error) => {
            return <p key={error}>{error}</p>;
        })}
        <input className="submit-button" type="Submit" value="Login"/>


        <p>Don't have an account? <span onClick={()=>setLoginForm(!loginForm)}>Sign up</span></p>

    </form> 
    )

}

export default Login 