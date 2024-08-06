import React from 'react'

import firstPhoto from '../../photos/5.jpg'
import secondPhoto from '../../photos/4.jpg'
import './home.scss'

import { Link } from 'react-router-dom'

export const Home = () => {
	return (
		<div className='home'>
			<div className='main-img'>
				<img src={firstPhoto} alt='<3' />
			</div>

			<hr style={{ width: 14, height: 2, background: '#4f4d47', border: 0 }} />

			<p className='fact'>З тобою будь-який день стає теплим і затишним.</p>

			<Link to='/collection' className='view'>
				<button>View collection</button>
			</Link>

			<div className='bottom'>
				<p>
					Під дощем, що ллється за вікном, ми знаходимо тепло один одного, і усе
					навколо стає тихим і неймовірно затишним, як частина нашого власного
					романтичного фільму.
				</p>
				<img src={secondPhoto} alt='<3' />
			</div>
		</div>
	)
}
