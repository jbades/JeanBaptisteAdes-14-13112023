import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setEmployeeId } from '../../../features/employeeProfile'

export default function Menu() {

    const dispatch = useDispatch()

    // emptying employeeId in global-state
    const emptyEmployeeId = (() => {
        dispatch(setEmployeeId(""))
    })

    // rendering menu
    return <nav className="main-nav">        
        <NavLink to="/current-employees" className=".main-nav-item">View current employees</NavLink>
        <NavLink to="/create-employee" className=".main-nav-item" onClick={emptyEmployeeId}>Create employee</NavLink>
    </nav>
}