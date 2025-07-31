import { useState } from 'react';

export default function QuizScreen({ question, onAnswer }) {
  const [showHint, setShowHint] = useState(false);

  const handleAnswer = (choice) => {
    const isCorrect = choice === question.answer;
    onAnswer(isCorrect);
    setShowHint(false);
  };

  return (
    <div className="quiz-screen fade-in">
      <h2 className="quiz-question">❓ {question.question}</h2>

      <ul className="quiz-choices">
        {question.choices.map((choice, i) => (
          <li key={i}>
            <button className="button" onClick={() => handleAnswer(choice)}>
              {choice}
            </button>
          </li>
        ))}
      </ul>

      {!showHint ? (
        <button className="hint-button" onClick={() => setShowHint(true)}>
          🔍 ヒントを見る
        </button>
      ) : (
        <p className="hint-text">💡 ヒント: {question.hint}</p>
      )}
    </div>
  );
}
