import React from 'react';
import CardRender from './CardRender.js';

const GameBoard = ({img}) => {

	return (
		<div>
			<h1>Game Board</h1>
			<CardRender img={img} />
		</div>
	)
}









export default GameBoard;