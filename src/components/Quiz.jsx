import { useContext, useState } from 'react';
import { Questions } from '../helpers/Questions';
import { GameStateContext } from '../helpers/Context';
export default function Quiz() {
	const { score, setScore, setGameState } = useContext(GameStateContext);

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [optionChosen, setOptionChosen] = useState('');

	const chooseOption = (option) => {
		setOptionChosen(option);
	};

	const nextQuestion = () => {
		if (Questions[currentQuestion].answer === optionChosen) {
			setScore(score + 1);
		}

		setCurrentQuestion(currentQuestion + 1);
	};

	const finishQuestion = () => {
		if (Questions[currentQuestion].answer === optionChosen) {
			setScore(score + 1);
		}
		setGameState('finish');
	};

	return (
		<div className='Quiz'>
			<h1>{Questions[currentQuestion].question}</h1>
			<div className='questions'>
				<button onClick={() => chooseOption('A')}>
					{Questions[currentQuestion].A}
				</button>
				<button onClick={() => chooseOption('B')}>
					{Questions[currentQuestion].B}
				</button>
				<button onClick={() => chooseOption('C')}>
					{Questions[currentQuestion].C}
				</button>
				<button onClick={() => chooseOption('D')}>
					{Questions[currentQuestion].D}
				</button>
			</div>
			{currentQuestion === Questions.length - 1 ? (
				<button onClick={finishQuestion} id='nextQuestion'>
					Finish Quiz
				</button>
			) : (
				<button onClick={nextQuestion} id='nextQuestion'>
					Next Question
				</button>
			)}
		</div>
	);
}
