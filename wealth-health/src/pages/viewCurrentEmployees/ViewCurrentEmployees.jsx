// import React-related libraries
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

// import other libraries
import { AgGridReact } from 'ag-grid-react'

// import reducer
import { setEmployeeId } from "../../features/employeeProfile"

// import style sheets
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css'
import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-alpine.css'

export default function ViewCurrentEmployees() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  
  const employees = useSelector((state) => state.employeeProfile.employees)
  
  const handleRowClick = (row) => {
    dispatch(setEmployeeId(row.data.id))
    navigate('/create-employee')
  }


  const columns = [{
    field: 'lastName',
    headerName: 'Last Name',
    sortable: true,
    filter: 'agTextColumnFilter'
  }, {
    field: 'firstName',
    headerName: 'First Name',
    sortable: true,
    filter: 'agTextColumnFilter'
  }, {
    field: 'birthday',
    headerName: 'Birthday',
    sortable: true,
    filter: 'agTextColumnFilter'
  }, {
    field: 'startDate',
    headerName: 'Start Date',
    sortable: true,
    filter: 'agTextColumnFilter'
  }, {
    field: 'address.street',
    headerName: 'Street',
    sortable: true,
    filter: 'agTextColumnFilter'
  }, {
    field: 'address.city',
    headerName: 'City',
    sortable: true,
    filter: 'agTextColumnFilter'
  }, {
    field: 'address.zipcode',
    headerName: 'Zipcode',
    sortable: true,
    filter: 'agTextColumnFilter'
  }, {
    field: 'address.state',
    headerName: 'State',
    sortable: true,
    filter: 'agTextColumnFilter'
  }, {
    field: 'department',
    headerName: 'Department',
    sortable: true,
    filter: 'agTextColumnFilter'
  }]

  // error management
  if (!employees || employees.length === 0) {
    return <div>The employees-list is currently empty.</div>;
  }
  
  // rendering the filtered-table
  return (
    <main className="main bg-dark">
      <section className="sign-in-content container mt-5 col-sm-12">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h3 className="modal-title mb-4">Current Employees</h3>
          <div className="ag-theme-alpine">
            <AgGridReact
              rowData={employees}
              columnDefs={columns}
              onRowClicked={handleRowClick}
              rowSelection="single"
              floatingFilter={true}
              pagination={true}
              paginationAutoPageSize={true}
            />
          </div>
      </section>
    </main>
  );
}
