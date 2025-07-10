import type { EmployeesState } from './employees.slice.ts'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { Employee } from '../../types/employee.type.ts'

export const addEmployeeAction = (state: EmployeesState, action: PayloadAction<Employee>) => {
	state.employees.push(action.payload)
	localStorage.setItem('employees', JSON.stringify(state.employees))
}
