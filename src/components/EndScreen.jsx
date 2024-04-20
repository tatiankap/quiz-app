import { useContext } from 'react';
import { GameStateContext } from '../helpers/Context';
import { Questions } from '../helpers/Questions';

export default function EndScreen() {
	const { score, userName, setGameState, setScore } =
		useContext(GameStateContext);
	const restartQuiz = () => {
		setScore(0);
		setGameState('menu');
	};
	return (
		<div className='EndScreen'>
			<h1>Quiz Finished</h1>
			<h3>{userName}</h3>
			<p>
				Your score: {score} / {Questions.length}
			</p>
			<button onClick={restartQuiz}>Restart Quiz</button>
		</div>
	);
}
