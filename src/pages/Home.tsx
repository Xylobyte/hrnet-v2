import './Home.scss'
import { useEffect } from 'react'
import Select from 'react-select'
import { departmentsList, statesList } from '../data/select-lists.ts'
import rsStyles from '../styles/rs-styles.ts'

function Home() {
	useEffect(() => {
		document.title = 'HRnet - Home'
	}, [])

	return (
		<>
			<form id='home-form' className='gap10 flex'>
				<fieldset className='gap20 flex'>
					<legend>
						<h2>Create Employee</h2>
					</legend>

					<div className='gap40 row flex'>
						<div className='base-infos flex gap15'>
							<div className='form-item flex gap5'>
								<label htmlFor='firstName'>First Name</label>
								<input type='text' name='firstName' id='firstName' />
							</div>

							<div className='form-item flex gap5'>
								<label htmlFor='lastName'>Last Name</label>
								<input type='text' name='lastName' id='lastName' />
							</div>

							<div className='form-item flex gap5'>
								<label htmlFor='dateOfBirth'>Date of Birth</label>
								<input type='date' name='dateOfBirth' id='dateOfBirth' />
							</div>

							<div className='form-item flex gap5'>
								<label htmlFor='startDate'>Start Date</label>
								<input type='date' name='startDate' id='startDate' />
							</div>
						</div>

						<fieldset className='gap15 flex'>
							<legend>Address</legend>

							<div className='form-item flex gap5'>
								<label htmlFor='street'>Street</label>
								<input type='text' name='street' id='street' />
							</div>

							<div className='form-item flex gap5'>
								<label htmlFor='city'>City</label>
								<input type='text' name='city' id='city' />
							</div>

							<div className='form-item flex gap5'>
								<label htmlFor='state'>State</label>
								<Select
									styles={rsStyles}
									options={statesList}
									defaultValue={statesList[0]}
									getOptionLabel={(o: (typeof statesList)[0]) => o.name}
									getOptionValue={(o: (typeof statesList)[0]) => o.abbreviation}
								/>
							</div>

							<div className='form-item flex gap5'>
								<label htmlFor='zipCode'>Zip Code</label>
								<input type='number' name='zipCode' id='zipCode' />
							</div>
						</fieldset>
					</div>

					<hr />

					<div className='form-item flex gap10 row a-center'>
						<label htmlFor='department'>Department</label>
						<Select styles={rsStyles} options={departmentsList} defaultValue={departmentsList[0]} />
					</div>
				</fieldset>

				<button type='submit'>Save</button>
			</form>
		</>
	)
}

export default Home
