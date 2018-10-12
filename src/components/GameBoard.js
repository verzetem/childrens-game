import React from 'react';
import CardRender from './CardRender.js';

const GameBoard = ({img}) => {

	return (
		<div>
			<h1>Game Board</h1>
			<div className="gameBoard">
				
						<CardRender img={img} />
					
			</div>
		</div>
	)
}









export default GameBoard;