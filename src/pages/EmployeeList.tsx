import './EmployeeList.scss'
import { useEffect } from 'react'

function EmployeeList() {
	useEffect(() => {
		document.title = 'HRnet - Employees list'
	}, [])

	return <div></div>
}

export default EmployeeList
