import {NavLink} from "react-router-dom"

const linkStyles = {
    width: "100px",
    padding: "12px",
    margin: "0 6px 6px", 
    background: "#2D68C4", 
    textDecoration: "none", 
    color: "white",
}

function NavBar() {
    return (

        <div> 

            <NavLink 
            to="/"
            exact 
            style={linkStyles}
            activeStyle={{
                background: "#F2a900"
            }} 
            >
             Home
            </NavLink>


            <NavLink 
            to="/allgoals"
            exact 
            style={linkStyles}
            activeStyle={{
                background: "#F2a900"
            }} 
            >
                All Goals
            </NavLink>

            <NavLink 
            to="/allexpenses"
            exact 
            style={linkStyles}
            activeStyle={{
                background: "#F2A900"
            }}>
                All Expenses
            </NavLink>

            
            <NavLink 
            to="/jan"
            exact 
            style={linkStyles}
            activeStyle={{
                background: "#F2a900"
            }} 
            >
                January
            </NavLink>

            <NavLink 
            to="/feb"
            exact 
            style={linkStyles}
            activeStyle={{
                background: "#F2A900"
            }}>
                February
            </NavLink>

            <NavLink 
            to="/mar"
            exact 
            style={linkStyles}
            activeStyle={{
                background: "#F2a900"
            }} 
            >
                March
            </NavLink>
           
            <br></br>
            <br></br>
            <br></br>

            <NavLink 
            to="/apr"
            exact 
            style={linkStyles}
            activeStyle={{
                background: "#F2a900"
            }} 
            >
                April
            </NavLink>

            <NavLink 
            to="/may"
            exact 
            style={linkStyles}
            activeStyle={{
                background: "#F2a900"
            }} 
            >
                May
            </NavLink>


            <NavLink 
            to="/jun"
            exact 
            style={linkStyles}
            activeStyle={{
                background: "#F2a900"
            }} 
            >
                June
            </NavLink>

            <NavLink 
            to="/jul"
            exact 
            style={linkStyles}
            activeStyle={{
                background: "#F2a900"
            }} 
            >
                July
            </NavLink>

            <NavLink 
            to="/aug"
            exact 
            style={linkStyles}
            activeStyle={{
                background: "#F2a900"
            }} 
            >
                August
            </NavLink>

            <NavLink 
            to="/sep"
            exact 
            style={linkStyles}
            activeStyle={{
                background: "#F2a900"
            }} 
            >
                September
            </NavLink>

            <NavLink 
            to="/oct"
            exact 
            style={linkStyles}
            activeStyle={{
                background: "#F2a900"
            }} 
            >
                October
            </NavLink>

            <NavLink 
            to="/nov"
            exact 
            style={linkStyles}
            activeStyle={{
                background: "#F2a900"
            }} 
            >
                November
            </NavLink>

            <NavLink 
            to="/dec"
            exact 
            style={linkStyles}
            activeStyle={{
                background: "#F2a900"
            }} 
            >
                December
            </NavLink>

        </div>

    )
}

export default NavBar;