import React from 'react';
import CardRender from './CardRender.js';

const GameBoard = ({img, isChosen, selected}) => {

	return (
		<div>
			<div className="gameBoard">
				<CardRender selected={selected} isChosen={isChosen} img={img} />
			</div>
		</div>
	)
}

export default GameBoard;