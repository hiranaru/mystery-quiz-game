import { useState } from 'react';

export default function QuizScreen({ question, onAnswer, onNext }) {
  const [selected, setSelected] = useState(null);
  const [showHint, setShowHint] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null);

  const handleSelect = (choice) => {
    if (showOverlay) return;
    const correct = choice === question.answer;
    setSelected(choice);
    setIsCorrect(correct);
    setShowOverlay(true);
    onAnswer(correct);
  };

  const handleNext = () => {
    setSelected(null);
    setShowHint(false);
    setShowOverlay(false);
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
              className={`button ${selected === choice ? 'selected' : ''}`}
              onClick={() => handleSelect(choice)}
              disabled={showOverlay}
            >
              {choice}
            </button>
          </li>
        ))}
      </ul>

      {!showHint && !showOverlay && (
        <button className="hint-button" onClick={() => setShowHint(true)}>
          🔍 ヒントを見る
        </button>
      )}

      {showHint && <p className="hint-text">💡 ヒント: {question.hint}</p>}

      {showOverlay && (
        <div className={`answer-overlay ${isCorrect ? 'correct' : 'incorrect'}`}>
          <h2>{isCorrect ? '✅ 正解！' : '❌ 不正解'}</h2>
          <p>🧠 解説: {question.explanation}</p>
          <button onClick={handleNext}>▶️ 次へ</button>
        </div>
      )}
    </div>
  );
}
