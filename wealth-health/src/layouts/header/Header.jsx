import { Link} from 'react-router-dom'
import Menu from './menu/Menu'

export default function Header() {

    return <header>
        <Link className="main-nav-logo" to="/current-employees">
            <img 
                className="main-nav-logo-image" 
                src="/assets/img/Logo.png" 
                alt="Weath Healt Logo"
            />
            <h1 className="sr-only">Wealth Health</h1>
        </Link>
        <Menu />    
    </header>
}