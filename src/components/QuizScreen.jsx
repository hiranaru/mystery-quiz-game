import { useState } from 'react';

export default function QuizScreen({ question, onAnswer }) {
  const [showHint, setShowHint] = useState(false);
  const [selectedChoice, setSelectedChoice] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleAnswer = (choice) => {
    if (isAnswered) return;

    setSelectedChoice(choice);
    const correct = choice === question.answer;
    setIsCorrect(correct);
    setIsAnswered(true);
  };

  const handleNext = () => {
    setShowHint(false);
    setSelectedChoice(null);
    setIsAnswered(false);
    onAnswer(isCorrect);
  };

  return (
    <div className="quiz-screen fade-in">
      <h2 className="quiz-question">❓ {question.question}</h2>

      <ul className="quiz-choices">
        {question.choices.map((choice, i) => {
          let buttonClass = "button";
          if (isAnswered) {
            if (choice === question.answer) {
              buttonClass += " correct";
            } else if (choice === selectedChoice) {
              buttonClass += " wrong";
            }
          }

          return (
            <li key={i}>
              <button
                className={buttonClass}
                onClick={() => handleAnswer(choice)}
                disabled={isAnswered}
              >
                {choice}
              </button>
            </li>
          );
        })}
      </ul>

      {isAnswered && (
        <>
          <div className="answer-feedback">
            {isCorrect ? "🎉 正解！" : "😢 不正解…"}
          </div>
          <button className="next-button" onClick={handleNext}>
            ▶ 次へ
          </button>
        </>
      )}

      {!showHint && !isAnswered && (
        <button className="hint-button" onClick={() => setShowHint(true)}>
          🔍 ヒントを見る
        </button>
      )}
      {showHint && !isAnswered && (
        <p className="hint-text">💡 ヒント: {question.hint}</p>
      )}
    </div>
  );
}
