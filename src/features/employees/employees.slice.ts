import type { Employee } from '../../types/employee.type.ts'
import { createSlice } from '@reduxjs/toolkit'

export type EmployeesState = {
	employees: Employee[]
}

const initialState: EmployeesState = {
	employees: [],
}

export const employeesSlice = createSlice({
	name: 'employees',
	initialState,
	reducers: {},
})

export default employeesSlice.reducer
