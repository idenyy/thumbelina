import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { Header } from './components/Header/index.jsx'
import { Footer } from './components/Footer/index.jsx'
import { Home } from './pages/Home/index.jsx'
import { Collection } from './pages/Collection/index.jsx'

const App = () => {
	return (
		<div className='wrapper'>
			<Header />
			<Routes>
				<Route path='/thumbelina' element={<Home />} />
				<Route path='/collection' element={<Collection />} />
			</Routes>
			<Footer />
		</div>
	)
}

export default App
