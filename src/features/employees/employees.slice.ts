import type { Employee } from '../../types/employee.type.ts'
import { createSlice } from '@reduxjs/toolkit'
import { addEmployeeAction } from './employees.actions.ts'

export type EmployeesState = {
	employees: Employee[]
}

const initialState: EmployeesState = {
	employees: [],
}

export const employeesSlice = createSlice({
	name: 'employees',
	initialState,
	reducers: {
		addEmployee: addEmployeeAction,
	},
})

export const { addEmployee } = employeesSlice.actions

export default employeesSlice.reducer
