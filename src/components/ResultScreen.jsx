export default function ResultScreen({ score, total, onRestart }) {
  const getMessage = () => {
    const ratio = score / total;
    if (ratio === 1) return '🎉 完璧です！あなたは名探偵！';
    if (ratio >= 0.75) return '🕵️‍♀️ なかなかの推理力ですね！';
    if (ratio >= 0.5) return '🧐 もう少しで名探偵！';
    return '🤔 惜しい… もう一度挑戦してみましょう！';
  };

  return (
    <div style={styles.container}>
      <h2>結果発表</h2>
      <p style={styles.score}>
        正解数: {score} / {total}
      </p>
      <p style={styles.message}>{getMessage()}</p>
      <button onClick={onRestart} style={styles.button}>もう一度プレイ</button>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    padding: '4rem',
    backgroundColor: '#f0f8ff',
    minHeight: '100vh',
  },
  score: {
    fontSize: '1.8rem',
    marginBottom: '1rem',
  },
  message: {
    fontSize: '1.2rem',
    color: '#333',
    marginBottom: '2rem',
  },
  button: {
    fontSize: '1rem',
    padding: '0.75rem 2rem',
    backgroundColor: '#0074D9',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
  },
};
