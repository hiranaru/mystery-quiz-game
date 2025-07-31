import { useState } from 'react';

export default function QuizScreen({ questions, onAnswer, onFinish }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showHint, setShowHint] = useState(false);

  const currentQuestion = questions[currentIndex];

  const handleAnswer = (choice) => {
    onAnswer(choice, currentQuestion.answer);
    setShowHint(false);

    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      onFinish();
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.question}>{currentQuestion.question}</h2>

      <ul style={styles.choices}>
        {currentQuestion.choices.map((choice, i) => (
          <li key={i}>
            <button onClick={() => handleAnswer(choice)} style={styles.button}>
              {choice}
            </button>
          </li>
        ))}
      </ul>

      {!showHint ? (
        <button onClick={() => setShowHint(true)} style={styles.hintButton}>ヒントを見る</button>
      ) : (
        <p style={styles.hint}>💡 ヒント: {currentQuestion.hint}</p>
      )}
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    padding: '3rem',
    backgroundColor: '#fff',
    minHeight: '100vh',
  },
  question: {
    fontSize: '1.5rem',
    marginBottom: '2rem',
  },
  choices: {
    listStyle: 'none',
    padding: 0,
    marginBottom: '1.5rem',
  },
  button: {
    margin: '0.5rem',
    padding: '1rem 2rem',
    fontSize: '1rem',
    backgroundColor: '#0074D9',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
  },
  hintButton: {
    marginTop: '1rem',
    padding: '0.5rem 1rem',
    fontSize: '0.9rem',
    backgroundColor: '#FF851B',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
  },
  hint: {
    marginTop: '1rem',
    fontStyle: 'italic',
    color: '#555',
  },
};
