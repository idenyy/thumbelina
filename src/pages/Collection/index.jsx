import React, { useState } from 'react'
import one from '/collection/1.jpg'
import two from '/collection/2.jpg'
import three from '/collection/3.jpg'
import four from '/collection/6.jpg'
import five from '/collection/7.jpg'
import six from '/collection/8.jpg'
import seven from '/collection/9.jpg'
import eight from '/collection/10.jpg'
import './collection.scss'

export const Collection = () => {
	const [selectedImage, setSelectedImage] = useState(null)

	const images = [one, two, three, four, five, six, seven, eight]

	const handleImageClick = img => {
		setSelectedImage(img)
	}

	const handleCloseModal = () => {
		setSelectedImage(null)
	}

	return (
		<div>
			<div className='gallery'>
				{images.map((img, index) => (
					<div key={index} className='gallery-item'>
						<img
							src={img}
							alt={`Image ${index + 1}`}
							onClick={() => handleImageClick(img)}
						/>
					</div>
				))}
			</div>

			{selectedImage && (
				<div className='modal' onClick={handleCloseModal}>
					<img src={selectedImage} alt='Selected' className='modal-image' />
				</div>
			)}
		</div>
	)
}
