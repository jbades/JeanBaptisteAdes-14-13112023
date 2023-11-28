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
        // adding ID to employee-object
        const employeeWithId = { ...action.payload, id: uuidv4() };
      
        // adding employee-object to global state
        state.employees.push(employeeWithId);
      }
    }
  });

// action creators
export const { setEmployee } = userSlice.actions

export default userSlice.reducer;
