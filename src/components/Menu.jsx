import { useContext } from 'react';
import '../App.css';
import { GameStateContext } from '../helpers/Context';

export default function Menu() {
	const { setGameState, setUserName } = useContext(GameStateContext);
	return (
		<div className='Menu'>
			<input
				type='text'
				placeholder='Ex. John Smith'
				onChange={(e) => setUserName(e.target.value)}
			/>
			<button onClick={() => setGameState('playing')}>Start Quiz</button>
		</div>
	);
}
