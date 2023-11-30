import { NavLink} from 'react-router-dom'
import Menu from './menu/Menu'

export default function Header() {

    return <nav className="main-nav">
        <NavLink className="main-nav-logo" to="/current-employees">
            <img 
                className="main-nav-logo-image" 
                src="/assets/img/Logo.png" 
                alt="Weath Healt Logo"
            />
            <h1 className="sr-only">Wealth Health</h1>
        </NavLink>
        <Menu />    
    </nav>
}