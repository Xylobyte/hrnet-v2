import './HeaderNav.scss'
import { NavLink, useLocation } from 'react-router'

function HeaderNav() {
	const location = useLocation()

	return (
		<header className='gap20 flex a-center'>
			<h1>{location.pathname === '/' ? 'HRnet' : 'Current Employees'}</h1>
			<nav className='gap10 flex row a-center'>
				<NavLink to='/'>Home</NavLink>|<NavLink to='/employee-list'>Current Employees</NavLink>
			</nav>
		</header>
	)
}

export default HeaderNav
