import './Home.scss'
import { useEffect } from 'react'

function Home() {
	useEffect(() => {
		document.title = 'HRnet - Home'
	}, [])

	return (
		<form id='home-form' className='gap10'>
			<fieldset className='gap20'>
				<legend>
					<h2>Create Employee</h2>
				</legend>

				<div className='gap40 row'>
					<div className='base-infos gap15'>
						<div className='form-item gap5'>
							<label htmlFor='firstName'>First Name</label>
							<input type='text' name='firstName' id='firstName' />
						</div>

						<div className='form-item gap5'>
							<label htmlFor='lastName'>Last Name</label>
							<input type='text' name='lastName' id='lastName' />
						</div>

						<div className='form-item gap5'>
							<label htmlFor='dateOfBirth'>Date of Birth</label>
							<input type='date' name='dateOfBirth' id='dateOfBirth' />
						</div>

						<div className='form-item gap5'>
							<label htmlFor='startDate'>Start Date</label>
							<input type='date' name='startDate' id='startDate' />
						</div>
					</div>

					<fieldset className='gap15'>
						<legend>Address</legend>

						<div className='form-item gap5'>
							<label htmlFor='street'>Street</label>
							<input type='text' name='street' id='street' />
						</div>

						<div className='form-item gap5'>
							<label htmlFor='city'>City</label>
							<input type='text' name='city' id='city' />
						</div>

						<div className='form-item gap5'>
							<label htmlFor='state'>State</label>
							<select name='state' id='state'></select>
						</div>

						<div className='form-item gap5'>
							<label htmlFor='zipCode'>Zip Code</label>
							<input type='number' name='zipCode' id='zipCode' />
						</div>
					</fieldset>
				</div>

				<hr />

				<div className='form-item gap10 row a-center'>
					<label htmlFor='department'>Department</label>
					<select name='department' id='department'>
						<option value='sales'>Sales</option>
						<option value='engineering'>Engineering</option>
						<option value='finance'>Finance</option>
						<option value='human-resources'>Human Resources</option>
						<option value='legal'>Legal</option>
					</select>
				</div>
			</fieldset>

			<button type='submit'>Save</button>
		</form>
	)
}

export default Home
