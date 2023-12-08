// react & redux libraries
import { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

// react-boostrap library
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Dropdown from 'react-bootstrap/Dropdown'

// reducer
import { setEmployee, setModalStatus } from "../../features/employeeProfile"

// style
import "../../styles/sass/_main.scss"

// data lists
import Departments from "../../assets/data/Departments.json"
import States from "../../assets/data/States.json"

export default function SignIn() {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleClose = () => dispatch(setModalStatus(false))

    const show = useSelector((state) => state.employeeProfile.showModal)

    // setting up default-local-states
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [birthday, setBirthday] = useState(null)
    const [startDate, setStartDate] = useState(null)
    const [street, setStreet] = useState("")
    const [city, setCity] = useState("")
    const [state, setState] = useState("")
    const [zipcode, setZipcode] = useState("")
    const [department, setDepartment] = useState("")

    // checking if employeeId exists in global-state
    const store = useSelector((state) => {
        return state.employeeProfile
    })

    useEffect(() => {
        if (store.employeeId) {
            // mapping selected-employee
            const selectedEmployee = store.employees.filter((selectedEmployee) => {
                return selectedEmployee.id === store.employeeId
            })[0]
            // updating local-state
            setFirstName(selectedEmployee.firstName)
            setLastName(selectedEmployee.lastName)
            setBirthday(selectedEmployee.birthday)
            setStartDate(selectedEmployee.startDate)
            setStreet(selectedEmployee.address.street)
            setCity(selectedEmployee.address.city)
            setZipcode(selectedEmployee.address.zipcode)
            setState(selectedEmployee.address.state)
            setDepartment(selectedEmployee.department)

        }
    }, [store.employeeId, store.employees])

    const handleSubmit = e => {
        e.preventDefault()

        // change showModal status in global state
        dispatch(setModalStatus(true))
    }

    // setting up global state on submit
    const handleModalClose = () => {
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
        dispatch(setModalStatus(true))

        // redirecting to employees-list
        navigate('/current-employees')
        dispatch(setModalStatus(false))
    }

    return <main className="main bg-dark">
        <section className="sign-in-content container mt-5">
            <i className="fa fa-user-circle sign-in-icon"></i>
            <h3 className="modal-title mb-4">Create Employee</h3>
            <form onSubmit={handleSubmit} className="card p-4">
                <div className="row g-3">
                    <div className="col-md-6">
                        <label htmlFor="first-name" className="form-label">First Name</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="first-name" 
                            placeholder='Enter your first name'
                            value={firstName}
                            onInput={(e) => setFirstName(e.target.value)}
                            required
                        />
                    </div>

                    <div className="col-md-6">
                        <label htmlFor="last-name" className="form-label">Last Name</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            id="last-name" 
                            placeholder='Enter your last name'
                            value={lastName}
                            onInput={(e) => setLastName(e.target.value)} 
                            required
                        />
                    </div>

                    <div className="col-md-6">
                        <label htmlFor="birtday" className="form-label">Birthday</label>
                        <input 
                            type="date" 
                            className="form-control" 
                            id="birthday" 
                            value={birthday}
                            onInput={(e) => setBirthday(e.target.value)}
                            required
                        />
                    </div>

                    <div className="col-md-6">
                        <label htmlFor="start-date" className="form-label">Start Date</label>
                        <input 
                            type="date" 
                            className="form-control" 
                            id="start-date" 
                            value={startDate}
                            onInput={(e) => setStartDate(e.target.value)} 
                            required
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
                                    value={street}
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
                                    value={city}
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
                                    value={zipcode}
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
                            <Dropdown.Menu className='dropdown-menu'>
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
        </section>
        <section className="modal">
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Employee information</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>Do you want to save this employee information?</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Abort</Button>
                    <Button variant="primary" onClick={handleModalClose}>Confirm</Button>
                </Modal.Footer>
            </Modal>
        </section>
    </main>
}