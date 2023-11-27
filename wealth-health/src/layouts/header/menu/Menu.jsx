import { NavLink, useNavigate } from 'react-router-dom'

export default function Menu() {

    const navigate = useNavigate()
    
    // dealing with signout
    const handleSignOut = (event) => {

        event.preventDefault()
        navigate("/signin")
    }
    
    // rendering menu
    if (true) {
        return <nav className="main-nav">        
            <NavLink className="main-nav-item" to="/" onClick={handleSignOut}>
                <i className="fa fa-sign-out"></i>
                View current employees
            </NavLink>
        </nav>
    } else {
        return <nav className="main-nav">        
            <NavLink className="main-nav-item" to="/signin">
                <i className="fa fa-user-circle"></i>
                Create employee
            </NavLink>
        </nav>
    }

}