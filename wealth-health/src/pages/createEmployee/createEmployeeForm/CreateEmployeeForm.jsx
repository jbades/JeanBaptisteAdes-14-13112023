import { useState } from 'react'
import { useDispatch } from "react-redux"
import { setEmployee } from '../../../features/userProfile'

export default function SignInForm () {

    const dispatch = useDispatch()

    // setting up local states
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [birthday, setBirthday] = useState(null)
    const [startDate, setStartDate] = useState(null)
    const [street, setStreet] = useState("")
    const [city, setCity] = useState("")
    const [state, setState] = useState("")
    const [zipcode, setZipcode] = useState("")
    const [department, setDepartment] = useState("")

    // setting up global state on submit
    const handleSubmit = async (e) => {
        e.preventDefault()

        // creating employee-object
        const employeeData = {
            firstName: firstName,
            lastName: lastName,
            birthday: birthday,
            startDate: startDate,
            address: {
                street: street,
                city: city,
                state: state,
                zipcode: zipcode
            },
            department: department
        }

        // updating global state
        dispatch(setEmployee(employeeData))
    }

    // rendering form
    return (
        <form action="#" id="create-employee" onSubmit={handleSubmit}>

            <div className='field-wrapper'>
                <label htmlFor="first-name">First Name</label>
                <input type="text" id="first-name" onInput={(e) => setFirstName(e.target.value)} />
            </div>

            <div className='field-wrapper'>
                <label htmlFor="last-name">Last Name</label>
                <input type="text" id="last-name" onInput={(e) => setLastName(e.target.value)} />
            </div>

            <div className='field-wrapper'>
                <label htmlFor="date-of-birth">Date of Birth</label>
                <input id="date-of-birth" type="text" onInput={(e) => setBirthday(e.target.value)} />
            </div>

            <div className='field-wrapper'>
                <label htmlFor="start-date">Start Date</label>
                <input id="start-date" type="text" onInput={(e) => setStartDate(e.target.value)} />
            </div>

            <div className='field-wrapper'>
                <fieldset className="address">
                    <legend>Address</legend>

                    <label htmlFor="street">Street</label>
                    <input id="street" type="text" onInput={(e) => setStreet(e.target.value)} />

                    <label htmlFor="city">City</label>
                    <input id="city" type="text" onInput={(e) => setCity(e.target.value)} />

                    <label htmlFor="state">State</label>
                    <select name="state" id="state" onSelect={(e) => setState(e.target.value)} />

                    <label htmlFor="zip-code">Zip Code</label>
                    <input id="zip-code" type="number" onInput={(e) => setZipcode(e.target.value)} />
                </fieldset>
            </div>

            <div className='field-wrapper'>
                <label htmlFor="department">Department</label>
                <select name="department" id="department" onSelect={(e) => setDepartment(e.target.value)} >
                    <option>Sales</option>
                    <option>Marketing</option>
                    <option>Engineering</option>
                    <option>Human Resources</option>
                    <option>Legal</option>
                </select>
            </div>

            <button className="sign-in-button">Sign In</button>
        </form>
    )
}