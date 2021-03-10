import {useState} from "react";
import {Button, Divider, Form, Grid, Segment, Header, Image, Message} from "semantic-ui-react"
import {Link, useHistory} from 'react-router-dom'

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
    //     <Grid textAlign= 'center' style={{height: '100vh'}} verticalAlign='middle' >
    //         <Grid.Column style={{maxWidth: 450}} >
    //         <Header as='h2' color='black' textAlign='center'>
    //             Login Page!
    //         </Header>


    //     <Form className="login-form" onSubmit={handleLogin} autoComplete="off">
    //         <Segment stacked>
    //     <input 
    //         type="text" 
    //         name="username" 
    //         value={username} 
    //         onChange={(e) => setUsername(e.target.value)} 
    //         placeholder="Enter Username"/>
    //     <br></br>
    //     <br></br>
    //     <input 
    //         type="password" 
    //         name="password" 
    //         value={password} 
    //         onChange={(e) => setPassword(e.target.value)} 
    //         placeholder="Enter Password"
    //     />
    //     <br></br>
    //     <br></br>
    //     {errors.map((error) => {
    //         return <p key={error}>{error}</p>;
    //     })}
    //     <input className="submit-button" type="Submit" value="Login"/>


    //     <p>Don't have an account? <span onClick={()=>setLoginForm(!loginForm)}>Sign up</span></p>
    //     </Segment>
    // </Form> 

    //         </Grid.Column>
    //     </Grid>
    // )
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='black' textAlign='center'>
          <Image src="https://www.graphicsprings.com/filestorage/stencils/0e272055dc9876a1f417b0570282b324.png?width=500&height=500" />
          
        Login to your account
      </Header>
      <Form onSubmit={handleLogin} size='large'>
        <Segment stacked>
          <Form.Input 
                fluid icon='user' 
                iconPosition='left' 
                label='Username'
                placeholder='Username'
                value = {username}
                onChange={e=> setUsername(e.target.value)}
          />
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            label='Password'
            type='password'
            placeholder='Password'
            value={password}
            onChange={e=> setPassword(e.target.value)}
          />
          {errors.map(error => {
            return <p key={error}>{errors} </p>
          })}
          

          <Button type='submit' color='green' fluid size='large'>
            Login
          </Button>
        </Segment>
      </Form>
      <p>Don't have an account? <span onClick={()=>setLoginForm(!loginForm)}>Click me to <strong>Sign up!</strong></span></p>
    </Grid.Column>
  </Grid>)
}

export default Login 