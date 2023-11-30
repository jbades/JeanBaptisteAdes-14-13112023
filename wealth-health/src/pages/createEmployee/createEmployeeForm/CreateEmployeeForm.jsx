import { useState } from 'react'
import { useDispatch } from "react-redux"
import { setEmployee } from '../../../features/userProfile'
import { useNavigate } from "react-router-dom"
import Departments from "../../../assets/data/Departments.json"
import States from "../../../assets/data/States.json"
import Dropdown from 'react-bootstrap/Dropdown'

export default function SignInForm () {

    const dispatch = useDispatch()
    const navigate = useNavigate()

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
        const employee = {
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
        dispatch(setEmployee(employee))

        // redirection
        navigate("/current-employees")
    }

    // rendering form
    return (
        <form onSubmit={handleSubmit} className="card p-4">
            <div className="row g-3">
                <div className="col-md-6">
                    <label htmlFor="first-name" className="form-label">First Name</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="first-name" 
                        placeholder='Enter your first name'
                        onInput={(e) => setFirstName(e.target.value)} 
                    />
                </div>

                <div className="col-md-6">
                    <label htmlFor="last-name" className="form-label">Last Name</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="last-name" 
                        placeholder='Enter your last name'
                        onInput={(e) => setLastName(e.target.value)} 
                    />
                </div>

                <div className="col-md-6">
                    <label htmlFor="birtday" className="form-label">Birthday</label>
                    <input 
                        type="date" 
                        className="form-control" 
                        id="birthday" 
                        onInput={(e) => setBirthday(e.target.value)} 
                    />
                </div>

                <div className="col-md-6">
                    <label htmlFor="start-date" className="form-label">Start Date</label>
                    <input 
                        type="date" 
                        className="form-control" 
                        id="start-date" 
                        onInput={(e) => setStartDate(e.target.value)} 
                    />
                </div>

                <fieldset className="border mt-4 pb-2">
                    <legend className='px-2'>Address</legend>
                    <div className='row'>
                        <div className="col-md-6">
                            <label htmlFor="street" className="form-label">Street</label>
                            <input 
                                id="street" 
                                className='form-control' 
                                type="text"
                                placeholder="Enter your street"
                                onInput={(e) => setStreet(e.target.value)} 
                                required="required"
                            />
                        </div>

                        <div className="col-md-6">
                            <label htmlFor="city" className="form-label">City</label>
                            <input 
                                id="city" 
                                className='form-control' 
                                type="text" 
                                placeholder="Enter your city"
                                onInput={(e) => setCity(e.target.value)} 
                                required="required"
                            />
                        </div>

                        <div className='col-md-6'>
                            <label htmlFor="state" className="form-label">State</label>
                            <Dropdown>
                                <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic" className='w-100'>
                                {state || "Choose your state"}
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    {States.map((state) => {
                                        return <Dropdown.Item
                                            key={state.abbreviation}
                                            onClick={() => setState(state.name)}
                                            >
                                                {state.name}
                                        </Dropdown.Item>
                                    })}
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>

                        <div className="col-md-6">
                            <label htmlFor="zip-code" className="form-label">Zip Code</label>
                            <input 
                                id="zip-code" 
                                className='form-control' 
                                type="text" 
                                placeholder="Enter your zipcode"
                                onInput={(e) => setZipcode(e.target.value)} 
                                required="required"
                            />
                        </div>
                    </div>
                </fieldset>

                <div className="col-md-6">
                    <label htmlFor="department" className="form-label">Department</label>
                    <Dropdown>
                        <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
                            {department || "Choose your department"}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {Departments.map((dept, index) => (
                                <Dropdown.Item
                                    key={index}
                                    onClick={() => setDepartment(dept)}
                                >
                                    {dept}
                                </Dropdown.Item>
                            ))}
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>

            <div className="mt-4 text-center">
                <button type="submit" className="btn btn-primary col-6 mx-auto">Submit</button>
            </div>
        </form>
    )
}