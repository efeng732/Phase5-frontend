import {useState} from 'react';

function Signup({setCurrentUser, loginForm, setLoginForm, history}) {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const[bio, setBio] = useState("")
    const [errors, setErrors] = useState([])



    function handleSignUp(e){
        e.preventDefault()
        const newUser = {
            username: username,
            password: password,
            bio: bio
        }
        fetch('http://localhost:4000/signup',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
        .then(r => r.json())
        .then(user => {
            if (newUser.errors){
                setErrors(newUser.errors)
            } else {
                const { user, token } = newUser;
                localStorage.setItem("token", token);
                setCurrentUser(user);
                history.push('/home')
            }
        })
    }


    return (
        <form className="login-form" onSubmit={handleSignUp} autoComplete="off">
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

        <input 
            type="text" 
            name="bio" 
            value={bio} 
            onChange={(e) => setBio(e.target.value)} 
            placeholder="Enter Bio"
        />
            <br></br>
            <br></br> 
        {errors.map((error) => {
            return <p key={error}>{error}</p>;
        })}
        <input className="submit-button" type="Submit" value="SignUp"/>


        <p>Have an account? <span onClick={()=>setLoginForm(!loginForm)}>Login</span></p>
    </form>
    )
}

export default Signup