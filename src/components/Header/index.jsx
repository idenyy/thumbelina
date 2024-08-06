import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

import './header.scss'

export const Header = () => {
	return (
		<header>
			<div>
				<h1 className='title'>Карасик Уляна</h1>
				<p className='subtitle'>- the cutest girl -</p>
			</div>
			<nav>
				<Link to='/thumbelina' className='nav-item'>
					Home
				</Link>
				<Link to='/collection' className='nav-item'>
					Collection
				</Link>
			</nav>
		</header>
	)
}
