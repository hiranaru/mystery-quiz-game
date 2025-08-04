import { useState } from 'react';

export default function QuizScreen({ question, onAnswer }) {
  const [selected, setSelected] = useState(null);
  const [showHint, setShowHint] = useState(false);
  const [answered, setAnswered] = useState(false);

  const isCorrect = selected === question.answer;

  const handleSelect = (choice) => {
    if (answered) return;
    setSelected(choice);
    setAnswered(true);
  };

  const handleNext = () => {
    onAnswer(isCorrect);
    setSelected(null);
    setShowHint(false);
    setAnswered(false);
  };

  return (
    <div className="quiz-screen fade-in">
      <h2 className="quiz-question">❓ {question.question}</h2>

      <ul className="quiz-choices">
        {question.choices.map((choice, i) => (
          <li key={i}>
            <button
              className={`button ${
                answered
                  ? choice === question.answer
                    ? 'correct'
                    : choice === selected
                    ? 'incorrect'
                    : ''
                  : ''
              }`}
              onClick={() => handleSelect(choice)}
              disabled={answered}
            >
              {choice}
            </button>
          </li>
        ))}
      </ul>

      {!answered && !showHint && (
        <button className="hint-button" onClick={() => setShowHint(true)}>
          🔍 ヒントを見る
        </button>
      )}

      {!answered && showHint && (
        <p className="hint-text">💡 ヒント: {question.hint}</p>
      )}

      {answered && (
        <div className="answer-feedback">
          <p className={isCorrect ? 'correct-text' : 'incorrect-text'}>
            {isCorrect ? '✅ 正解！' : '❌ 不正解'}
          </p>
          <p className="explanation-text">🧠 解説: {question.explanation}</p>
          <button className="next-button" onClick={handleNext}>
            ▶️ 次へ
          </button>
        </div>
      )}
    </div>
  );
}
