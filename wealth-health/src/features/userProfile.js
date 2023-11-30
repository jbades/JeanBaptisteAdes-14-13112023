import { v4 as uuidv4 } from 'uuid';
import { createSlice } from '@reduxjs/toolkit'

  const initialState = {
    employees: []
  }

  // reducers
  const userSlice = createSlice({
    name: 'userProfile',
    initialState,
    reducers: {
      setEmployee: (state, action) => {
        // brings array-position if firstName, lastName & birthday match
        const index = state.employees.findIndex(employee =>
          employee.firstName === action.payload.firstName &&
          employee.lastName === action.payload.lastName &&
          employee.birthday === action.payload.birthday
        );
      
        if (index !== -1) {
          // if match, update employee data
          state.employees[index] = { ...action.payload, id: state.employees[index].id }
        } else {
          // if not, create an ID & add new employee
          const employeeWithId = { ...action.payload, id: uuidv4() }
          state.employees.push(employeeWithId)
        }
      }
    }
  });

// action creators
export const { setEmployee } = userSlice.actions

export default userSlice.reducer;
