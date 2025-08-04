import { useState } from 'react';

export default function QuizScreen({ question, onNext }) {
  const [selected, setSelected] = useState(null);
  const [showHint, setShowHint] = useState(false);

  const isAnswered = selected !== null;
  const isCorrect = selected === question.answer;

  const handleAnswer = (choice) => {
    if (!isAnswered) {
      setSelected(choice);
    }
  };

  return (
    <div className="quiz-screen fade-in">
      <h2 className="quiz-question">❓ {question.question}</h2>

      <ul className="quiz-choices">
        {question.choices.map((choice, i) => (
          <li key={i}>
            <button
              className={`button ${isAnswered ? (choice === question.answer ? 'correct' : (choice === selected ? 'incorrect' : '')) : ''}`}
              onClick={() => handleAnswer(choice)}
              disabled={isAnswered}
            >
              {choice}
            </button>
          </li>
        ))}
      </ul>

      {!isAnswered && !showHint && (
        <button className="hint-button" onClick={() => setShowHint(true)}>
          🔍 ヒントを見る
        </button>
      )}

      {showHint && !isAnswered && (
        <p className="hint-text">💡 ヒント: {question.hint}</p>
      )}

      {isAnswered && (
        <div className="answer-feedback">
          <p className={isCorrect ? "correct-text" : "incorrect-text"}>
            {isCorrect ? "✅ 正解！" : "❌ 不正解"}
          </p>
          <p className="explanation-text">🧠 解説: {question.explanation}</p>
          <button className="next-button" onClick={onNext}>
            ▶️ 次へ
          </button>
        </div>
      )}
    </div>
  );
}
