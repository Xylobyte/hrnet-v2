import './Home.scss'
import { useEffect } from 'react'

function Home() {
	useEffect(() => {
		document.title = 'HRnet - Home'
	}, [])

	return (
		<>
			<h2>Create Employee</h2>
		</>
	)
}

export default Home
