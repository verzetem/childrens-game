import React from 'react';

const CardRender = ({img, isChosen, selected}) => {

let cards = img.map((image, i) => {
	for (var prop in image) {
		return ( 
			<div className="card att" selected={selected} onClick={isChosen}>
				<img className="img" id={prop} src={image[prop]} width="200px" height="150px" />
			</div>
		 )
		}
})
let newArr = []
	 for (let i = 0; i < cards.length; i++) {
	 	newArr.push(cards[i])
	 	newArr.push(cards[i])
	 }
const shuffleArray = (array) => {
	for (var i = array.length - 1; i > 0; i--) {
	  var j = Math.floor(Math.random() * (i + 1));
	  var temp = array[i];
	  array[i] = array[j];
	  array[j] = temp;
	 } 
		return (array)
	}

	return (
		<React.Fragment>
			{shuffleArray(newArr)}
		</React.Fragment>
	)
}

export default CardRender;