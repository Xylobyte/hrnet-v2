import { configureStore } from '@reduxjs/toolkit'
import type { Employee } from '../types/employee.type.ts'
import employeesReducer, {
	type EmployeesState,
} from '../features/employees/employees.slice.ts'

const loadEmployees = (): Employee[] | [] => {
	try {
		return JSON.parse(localStorage.getItem('employees') || '[]')
	} catch {
		return []
	}
}

const preloadedState = {
	employees: {
		employees: loadEmployees(),
	} as EmployeesState,
}

export const store = configureStore({
	reducer: {
		employees: employeesReducer,
	},
	preloadedState,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
