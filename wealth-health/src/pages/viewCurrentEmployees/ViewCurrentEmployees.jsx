import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import BootstrapTable from 'react-bootstrap-table-next'
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css'
// import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit'
import paginator from "react-bootstrap-table2-paginator"
import { setEmployeeId } from "../../features/employeeProfile"

// const { SearchBar } = Search

const pagination = paginator({})

export default function ViewCurrentEmployees() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleRowClick = (row) => {
    dispatch(setEmployeeId(row.id))
    navigate('/create-employee')
  }

  const employees = useSelector((state) => state.employeeProfile.employees)

  const columns = [{
    dataField: 'lastName',
    text: 'Last Name',
    sort: true
  }, {
    dataField: 'firstName',
    text: 'First Name',
    sort: true
  }, {
    dataField: 'birthday',
    text: 'Birthday',
    sort: true
  }, {
    dataField: 'startDate',
    text: 'Start Date',
    sort: true
  }, {
    dataField: 'address.street',
    text: 'Street',
    sort: true
  }, {
    dataField: 'address.city',
    text: 'City',
    sort: true
  }, {
    dataField: 'address.zipcode',
    text: 'Zipcode',
    sort: true
  }, {
    dataField: 'address.state',
    text: 'State',
    sort: true
  }, {
    dataField: 'department',
    text: 'Department',
    sort: true
  }]

  const defaultSorted = [{
    dataField: 'lastName',
    order: 'asc'
  }]

  const selectRow = {
    mode: 'radio',
    clickToSelect: true,
    onSelect: handleRowClick
  }

  // error management
  if (!employees || employees.length === 0) {
    return <div>The employees-list is currently empty.</div>
  }

  // rendering the filtered-table
  return (
    <main className="main bg-dark">
      <section className="sign-in-content container mt-5 col-sm-12">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h3 className="modal-title mb-4">Current Employees</h3>
        <div className="table-responsive">
          {/* <ToolkitProvider
            keyField="id"
            data={ employees }
            columns={ columns }
            search
          > */}
            {/* {props => (
              <div>
                <SearchBar { ...props.searchProps } /> */}
                <BootstrapTable
                  // { ...props.baseProps }
                  keyField="id"
                  data={ employees }
                  columns={ columns }
                  bootstrap4
                  defaultSorted={ defaultSorted }
                  selectRow={ selectRow }
                  hover
                  pagination={pagination}
                />
                {/* </div>
              )}
            </ToolkitProvider> */}
        </div>
      </section>
    </main>
  );
}
