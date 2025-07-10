import './Home.scss'
import * as React from 'react'
import { useEffect, useState } from 'react'
import Select from 'react-select'
import rsStyles from '../styles/rs-styles.ts'
import DatePicker from 'react-datepicker'
import { departmentsList, statesList } from '../data/select-lists.ts'
import type { Employee } from '../types/employee.type.ts'
import { useAppDispatch } from '../app/hooks.ts'
import { addEmployee } from '../features/employees/employees.slice.ts'

function Home() {
	const [firstName, setFirstName] = useState('')
	const [lastName, setLastName] = useState('')
	const [dateOfBirth, setDateOfBirth] = useState(new Date())
	const [startDate, setStartDate] = useState(new Date())
	const [street, setStreet] = useState('')
	const [city, setCity] = useState('')
	const [state, setState] = useState(statesList[0])
	const [zipCode, setZipCode] = useState('')
	const [department, setDepartment] = useState(departmentsList[0])

	const dispatch = useAppDispatch()

	useEffect(() => {
		document.title = 'HRnet - Home'
	}, [])

	const onAddEmployee = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		const employee: Employee = {
			guid: crypto.randomUUID(),
			firstName,
			lastName,
			dateOfBirth: dateOfBirth.toISOString(),
			startDate: startDate.toISOString(),
			department: department.value,
			street,
			city,
			state: state.abbreviation,
			zipCode: Number(zipCode),
		}

		dispatch(addEmployee(employee))

		setFirstName('')
		setLastName('')
		setDateOfBirth(new Date())
		setStartDate(new Date())
		setStreet('')
		setCity('')
		setState(statesList[0])
		setZipCode('')
		setDepartment(departmentsList[0])
	}

	return (
		<form id='home-form' className='gap10 flex' onSubmit={onAddEmployee}>
			<fieldset className='gap20 flex'>
				<legend>
					<h2>Create Employee</h2>
				</legend>

				<div className='gap40 row flex'>
					<div className='base-infos flex gap15'>
						<div className='form-item flex gap5'>
							<label htmlFor='firstName'>First Name</label>
							<input
								type='text'
								name='firstName'
								id='firstName'
								autoComplete='family-name'
								onChange={e => setFirstName(e.target.value)}
								value={firstName}
							/>
						</div>

						<div className='form-item flex gap5'>
							<label htmlFor='lastName'>Last Name</label>
							<input
								type='text'
								name='lastName'
								id='lastName'
								autoComplete='given-name'
								onChange={e => setLastName(e.target.value)}
								value={lastName}
							/>
						</div>

						<div className='form-item flex gap5'>
							<label htmlFor='dateOfBirth'>Date of Birth</label>
							<DatePicker
								dateFormat='dd/MM/yyyy'
								isClearable={false}
								selected={dateOfBirth}
								onChange={val => val && setDateOfBirth(val)}
							/>
						</div>

						<div className='form-item flex gap5'>
							<label htmlFor='startDate'>Start Date</label>
							<DatePicker
								dateFormat='dd/MM/yyyy'
								isClearable={false}
								selected={startDate}
								onChange={val => val && setStartDate(val)}
							/>
						</div>
					</div>

					<fieldset className='gap15 flex'>
						<legend>Address</legend>

						<div className='form-item flex gap5'>
							<label htmlFor='street'>Street</label>
							<input
								type='text'
								name='street'
								id='street'
								autoComplete='street-address'
								onChange={e => setStreet(e.target.value)}
								value={street}
							/>
						</div>

						<div className='form-item flex gap5'>
							<label htmlFor='city'>City</label>
							<input
								type='text'
								name='city'
								id='city'
								autoComplete='address-level2'
								onChange={e => setCity(e.target.value)}
								value={city}
							/>
						</div>

						<div className='form-item flex gap5'>
							<label htmlFor='state'>State</label>
							<Select
								styles={rsStyles}
								options={statesList}
								value={state}
								getOptionLabel={(o: (typeof statesList)[0]) => o.name}
								getOptionValue={(o: (typeof statesList)[0]) => o.abbreviation}
								onChange={val => setState(val as (typeof statesList)[0])}
							/>
						</div>

						<div className='form-item flex gap5'>
							<label htmlFor='zipCode'>Zip Code</label>
							<input
								type='number'
								name='zipCode'
								id='zipCode'
								autoComplete='postal-code'
								onChange={e => setZipCode(e.target.value)}
								value={zipCode}
							/>
						</div>
					</fieldset>
				</div>

				<hr />

				<div className='form-item flex gap10 row a-center'>
					<label htmlFor='department'>Department</label>
					<Select styles={rsStyles} options={departmentsList} value={department} onChange={setDepartment} />
				</div>
			</fieldset>

			<button
				type='submit'
				disabled={
					firstName.length < 2 ||
					lastName.length < 2 ||
					zipCode.length < 5 ||
					street.length < 3 ||
					city.length < 2
				}
			>
				Save
			</button>
		</form>
	)
}

export default Home
