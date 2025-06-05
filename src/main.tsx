import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './app/store.ts'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router'
import Home from './pages/Home.tsx'
import EmployeeList from './pages/EmployeeList.tsx'
import HeaderNav from './components/HeaderNav.tsx'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<HeaderNav />

				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/employee-list' element={<EmployeeList />} />

					<Route path='*' element={<Navigate to='/' replace />} />
				</Routes>
			</BrowserRouter>
		</Provider>
	</StrictMode>,
)
