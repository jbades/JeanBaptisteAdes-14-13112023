import { NavLink } from 'react-router-dom'

export default function Menu() {

    // rendering menu
    return <nav className="main-nav">        
        <NavLink className="main-nav-item" to="/current-employees">
            <i className="fa fa-sign-out"></i>
            View current employees
        </NavLink>
    </nav>
}