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
          console.log(state, action.payload)
          // state.employees.indexOf
        }
    }
  });

// action creators
export const { setEmployee } = userSlice.actions

export default userSlice.reducer;
