import React from 'react';


const CardRender = ({img}) => {

let cards = img.map((image, i) => {
	for (var prop in image) {
		return <div><img id={prop} className="card" src={image[prop]} /></div>
		}
})

let newArr = []
	 for (let i = 0; i < cards.length; i++) {
	 	newArr.push(cards[i])
	 	newArr.push(cards[i])
	 	console.log(newArr)
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

		<>
			{shuffleArray(newArr)}
		</>
	)
}















export default CardRender;