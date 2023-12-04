import { useSelector } from "react-redux"
import Table from 'react-bootstrap/Table'

export default function ViewCurrentEmployees() {
  const employees = useSelector((state) => state.employeeProfile.employees)

  // error management
  if (!employees || employees.length === 0) {
    return <div>Loading...</div>
  }

  const headMappings = {
    lastName: 'Last Name',
    firstName: 'First Name',
    startDate: 'Start Date',
    department: 'Department'
  }

  // creating a filtered-tableheads array
  const tableHeads = Object.keys(employees[0]).filter(key =>
    Object.keys(headMappings).includes(key)
  )

  // rendering the filtered-table
  return (
    <main className="main bg-dark">
      <section className="sign-in-content container mt-5">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h3 className="modal-title mb-4">Current Employees</h3>
        <Table responsive>
          <thead>
            <tr>
              {tableHeads.map((head, index) => (
                <th key={index}>{headMappings[head]}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {employees.map((employee, index) => (
              <tr key={index}>
                {tableHeads.map(head => (
                  <td key={head}>{employee[head]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </Table>
      </section>
    </main>
  );
}
