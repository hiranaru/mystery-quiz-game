export default function StartScreen({ onStart }) {
  return (
    <div className="start-screen" style={styles.container}>
      <h1 style={styles.title}>🕵️‍♂️ ミステリークイズ</h1>
      <p style={styles.subtitle}>あなたの推理力が試される！</p>
      <button onClick={onStart} style={styles.button}>スタート</button>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    paddingTop: '20vh',
    backgroundColor: '#1c1c1c',
    color: 'white',
    minHeight: '100vh',
  },
  title: {
    fontSize: '2.5rem',
    marginBottom: '1rem',
  },
  subtitle: {
    fontSize: '1.2rem',
    marginBottom: '2rem',
  },
  button: {
    padding: '1rem 2rem',
    fontSize: '1rem',
    backgroundColor: '#ff4136',
    color: 'white',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
  },
};
