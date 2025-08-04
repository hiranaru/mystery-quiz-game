import { useState } from 'react';

export default function QuizScreen({ question, onAnswer, onNext }) {
  const [showHint, setShowHint] = useState(false);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null);

  const handleAnswer = (choice) => {
    if (isAnswered) return;

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
              className={`button ${isAnswered && choice === question.answer ? 'correct' : ''} ${isAnswered && choice !== question.answer && choice === choice ? 'incorrect' : ''}`}
              onClick={() => handleAnswer(choice)}
              disabled={isAnswered}
            >
              {choice}
            </button>
          </li>
        ))}
      </ul>

      {/* ヒント表示 */}
      {!showHint && !isAnswered && (
        <button className="hint-button" onClick={() => setShowHint(true)}>
          🔍 ヒントを見る
        </button>
      )}
      {showHint && <p className="hint-text">💡 ヒント: {question.hint}</p>}

      {/* 解説・フィードバック表示 */}
      {isAnswered && (
        <div className="answer-feedback">
          <p className={isCorrect ? 'correct-text' : 'incorrect-text'}>
            {isCorrect ? '✅ 正解！' : '❌ 不正解'}
          </p>
          <p className="explanation-text">🧠 解説: {question.explanation}</p>

          <button className="next-button" onClick={handleNext}>
            👉 次へ
          </button>
        </div>
      )}
    </div>
  );
}
