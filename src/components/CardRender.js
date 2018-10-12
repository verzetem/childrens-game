import React from 'react';


const CardRender = ({img}) => {

	return (

		<div>
			{img.map((image, i) => {
				// return <img src={image[i]} />
				for (var prop in image) {
					return <img src={image[prop]} />
				}
			})}
		</div>
	)
}















export default CardRender;