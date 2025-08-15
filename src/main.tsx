import { lazy, StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'react-datepicker/dist/react-datepicker.css'
import 'simple-table-core/styles.css'
import { Provider } from 'react-redux'
import { store } from './app/store.ts'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router'
import HeaderNav from './components/HeaderNav.tsx'

const Home = lazy(() => import('./pages/Home'))
const EmployeeList = lazy(() => import('./pages/EmployeeList.tsx'))

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<HeaderNav />

				<Suspense fallback={<div>Loading...</div>}>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/employee-list' element={<EmployeeList />} />

						<Route path='*' element={<Navigate to='/' replace />} />
					</Routes>
				</Suspense>
			</BrowserRouter>
		</Provider>
	</StrictMode>,
)
