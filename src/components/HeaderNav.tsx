import './HeaderNav.scss'
import { Link, useLocation } from 'react-router'

function HeaderNav() {
	const location = useLocation()

	return (
		<header className='gap15 a-center'>
			<h1>{location.pathname === '/' ? 'HRnet' : 'Current Employees'}</h1>
			<nav>
				<Link to={location.pathname === '/' ? '/employee-list' : '/'}>
					{location.pathname === '/'
						? 'View Current Employees'
						: 'Home'}
				</Link>
			</nav>
		</header>
	)
}

export default HeaderNav
