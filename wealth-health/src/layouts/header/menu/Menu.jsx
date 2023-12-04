import { NavLink } from 'react-router-dom'

export default function Menu() {

    // rendering menu
    return <nav className="main-nav">        
        <NavLink to="/current-employees" className=".main-nav-item">View current employees</NavLink>
        <NavLink to="/create-employee" className=".main-nav-item">Create employee</NavLink>
    </nav>
}