import './EmployeeList.scss'
import { useEffect, useState } from 'react'
import { useAppSelector } from '../app/hooks.ts'
import { type HeaderObject, SimpleTable } from 'simple-table-core'

const headers: HeaderObject[] = [
	{ accessor: 'firstName', label: 'First name', width: '1fr', isSortable: true },
	{ accessor: 'lastName', label: 'Last name', width: '1fr', isSortable: true },
	{ accessor: 'startDate', label: 'Start date', width: '1fr', type: 'date', isSortable: true },
	{ accessor: 'department', label: 'Department', width: '1fr', isSortable: true },
	{ accessor: 'dateOfBirth', label: 'Date of birth', width: '1fr', type: 'date', isSortable: true },
	{ accessor: 'street', label: 'Street', width: '1fr', isSortable: true },
	{ accessor: 'city', label: 'City', width: '1fr', isSortable: true },
	{ accessor: 'state', label: 'State', width: '0.7fr', isSortable: true },
	{ accessor: 'zipCode', label: 'Zip code', width: '1fr', isSortable: true },
]

function EmployeeList() {
	const employees = useAppSelector(state => state.employees.employees)

	const [maxRows, setMaxRows] = useState(10)
	const [search, setSearch] = useState('')

	useEffect(() => {
		document.title = 'HRnet - Employees list'
	}, [])

	return (
		<div className='employee-list flex gap10'>
			<div className='head-actions flex row j-space-between'>
				<div className='flex row gap5 a-center'>
					Show
					<select
						name='max-rows'
						id='max-rows'
						value={maxRows}
						onChange={e => setMaxRows(Number(e.target.value))}
					>
						<option value='10'>10</option>
						<option value='20'>25</option>
						<option value='50'>50</option>
						<option value='100'>100</option>
					</select>
					entries
				</div>

				<input type='search' placeholder='Search...' value={search} onChange={e => setSearch(e.target.value)} />
			</div>

			<SimpleTable
				defaultHeaders={headers}
				shouldPaginate
				rowIdAccessor={'guid'}
				rows={employees.filter(employee =>
					`${employee.firstName} ${employee.lastName} ${employee.department} ${employee.city} ${employee.state} ${employee.street} ${employee.zipCode}`
						.toLowerCase()
						.includes(search.toLowerCase()),
				)}
				rowsPerPage={maxRows}
				columnResizing={true}
			/>
		</div>
	)
}

export default EmployeeList
