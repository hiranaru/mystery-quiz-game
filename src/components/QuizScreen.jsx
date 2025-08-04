import { useState } from 'react';

export default function QuizScreen({ question, onAnswer, onNext }) {
  const [showHint, setShowHint] = useState(false);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null);

  const handleAnswer = (choice) => {
    if (isAnswered) return; // 二重クリック防止

    const correct = choice === question.answer;
    setIsCorrect(correct);
    setIsAnswered(true);
    onAnswer(correct);
  };

  const handleNext = () => {
    setShowHint(false);
    setIsAnswered(false);
    setIsCorrect(null);
    onNext();
  };

  return (
    <div className="quiz-screen fade-in">
      <h2 className="quiz-question">❓ {question.question}</h2>

      <ul className="quiz-choices">
        {question.choices.map((choice, i) => (
          <li key={i}>
            <button
              className={`button ${isAnswered && choice === question.answer ? 'correct' : ''} ${isAnswered && choice !== question.answer ? 'disabled' : ''}`}
              onClick={() => handleAnswer(choice)}
              disabled={isAnswered}
            >
              {choice}
            </button>
          </li>
        ))}
      </ul>

      {!showHint && !isAnswered && (
        <button className="hint-button" onClick={() => setShowHint(true)}>
          🔍 ヒントを見る
        </button>
      )}
      {showHint && <p className="hint-text">💡 ヒント: {question.hint}</p>}

      {isAnswered && (
        <button className="next-button" onClick={handleNext}>
          👉 次へ
        </button>
      )}
    </div>
  );
}
