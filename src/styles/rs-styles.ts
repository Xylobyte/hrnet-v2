// reactSelectStyles.ts
// reactSelectStyles.ts
import type { StylesConfig } from 'react-select'

const rsStyles: StylesConfig = {
	control: (base, state) => ({
		...base,
		padding: '0px',
		borderRadius: '5px',
		border: state.isFocused ? '1px solid transparent' : '1px solid black',
		boxShadow: state.isFocused ? '0 0 0 2px #eaa74b' : 'none',
		minWidth: '250px',
		fontSize: '1rem',
		minHeight: 'unset',
		height: 'auto',
		'&:hover': {
			borderColor: state.isFocused ? 'transparent' : 'black',
		},
	}),
	indicatorsContainer: base => ({
		...base,
		padding: '0px',
	}),
	menu: base => ({
		...base,
		borderRadius: '5px',
		fontSize: '1rem',
		zIndex: 10,
	}),
	option: (base, state) => ({
		...base,
		backgroundColor: state.isFocused ? '#eaa74b22' : 'white',
		color: 'black',
		padding: '10px',
		cursor: 'pointer',
		'&:active': {
			backgroundColor: '#eaa74b44',
		},
	}),
}

export default rsStyles
