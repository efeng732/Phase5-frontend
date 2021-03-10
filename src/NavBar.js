import {NavLink} from "react-router-dom"
import {Grid, Button} from "semantic-ui-react"

const linkStyles = {
    width: "100px",
    padding: "10px",
    margin: "0 6px 6px 6px", 
    background: "dodgerblue", 
    textDecoration: "none", 
    color: "white",
    textAlign: "center",
    borderRadius: "20px", 
    borderStyle: "outset",
    boxShadow: "2px 2px"
    
}



function NavBar({history, handleLogOut, setCurrentUser}) {



    return (
        <>
        <br></br>
        <Grid> 

            <NavLink 
            to="/home"
            exact 
            style={linkStyles}
            activeStyle={{
                background: "#21BA45"
            }} 
            >
             Home
            </NavLink>


            <NavLink 
            to="/allgoals"
            exact 
            style={linkStyles}
            activeStyle={{
                background: "#21BA45"
            }} 
            >
                Goals
            </NavLink>

            <NavLink 
            to="/allexpenses"
            exact 
            style={linkStyles}
            activeStyle={{
                background: "#21BA45"
            }}>
                Expenses
            </NavLink>

                
            
            <NavLink 
            to="/jan"
            exact 
            style={linkStyles}
            activeStyle={{
                background: "#21BA45"
            }} 
            >
                January
            </NavLink>

            <NavLink 
            to="/feb"
            exact 
            style={linkStyles}
            activeStyle={{
                background: "#21BA45"
            }}>
                February
            </NavLink>

            <NavLink 
            to="/mar"
            exact 
            style={linkStyles}
            activeStyle={{
                background: "#21BA45"
            }} 
            >
                March
            </NavLink>
           


            <NavLink 
            to="/apr"
            exact 
            style={linkStyles}
            activeStyle={{
                background: "#21BA45"
            }} 
            >
                April
            </NavLink>

            <NavLink 
            to="/may"
            exact 
            style={linkStyles}
            activeStyle={{
                background: "#21BA45"
            }} 
            >
                May
            </NavLink>


            <NavLink 
            to="/jun"
            exact 
            style={linkStyles}
            activeStyle={{
                background: "#21BA45"
            }} 
            >
                June
            </NavLink>

            <NavLink 
            to="/jul"
            exact 
            style={linkStyles}
            activeStyle={{
                background: "#21BA45"
            }} 
            >
                July
            </NavLink>

            <NavLink 
            to="/aug"
            exact 
            style={linkStyles}
            activeStyle={{
                background: "#21BA45"
            }} 
            >
                August
            </NavLink>

            <NavLink 
            to="/sep"
            exact 
            style={linkStyles}
            activeStyle={{
                background: "#21BA45"
            }} 
            >
                September
            </NavLink>

            <NavLink 
            to="/oct"
            exact 
            style={linkStyles}
            activeStyle={{
                background: "#21BA45"
            }} 
            >
                October
            </NavLink>

            <NavLink 
            to="/nov"
            exact 
            style={linkStyles}
            activeStyle={{
                background: "#21BA45"
            }} 
            >
                November
            </NavLink>

            <NavLink 
            to="/dec"
            exact 
            style={linkStyles}
            activeStyle={{
                background: "#21BA45"
            }} 
            >
                December
            </NavLink>
            </Grid>
            <br></br>
    

                <Button 
                floated="right"
                color="green"
                animated='fade'
                onClick={handleLogOut} > 
                <Button.Content visible> Logging Out?</Button.Content>
                <Button.Content hidden>Come back soon!</Button.Content>
                </Button>
                
        

    </>
    )
}

export default NavBar;