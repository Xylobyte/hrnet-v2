import type { States } from './states.type.ts'

export type Employee = {
	firstName: string
	lastName: string
	dateOfBirth: string
	startDate: string
	department: string
	street: string
	city: string
	state: States
	zipCode: number
}
