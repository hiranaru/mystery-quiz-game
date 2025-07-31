import { useState } from 'react';

export default function QuizScreen({ question, onAnswer }) {
  const [showHint, setShowHint] = useState(false);

  const handleAnswer = (choice) => {
    const isCorrect = choice === question.answer;
    onAnswer(isCorrect);
    setShowHint(false);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.question}>{question.question}</h2>

      <ul style={styles.choices}>
        {question.choices.map((choice, i) => (
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
        <p style={styles.hint}>💡 ヒント: {question.hint}</p>
      )}
    </div>
  );
}

// 以下、styles オブジェクトはそのままでOK

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
