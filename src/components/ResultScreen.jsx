export default function ResultScreen({ score, total, onRestart }) {
  const getMessage = () => {
    const ratio = score / total;
    if (ratio === 1) return '🎉 完璧です！あなたは名探偵！';
    if (ratio >= 0.75) return '🕵️‍♀️ なかなかの推理力ですね！';
    if (ratio >= 0.5) return '🧐 もう少しで名探偵！';
    return '🤔 惜しい… もう一度挑戦してみましょう！';
  };

  return (
    <div className="result-screen fade-in">
      <h2 className="result-title">🧩 結果発表</h2>
      <p className="result-score">正解数: {score} / {total}</p>
      <p className="result-message">{getMessage()}</p>
      <button className="button" onClick={onRestart}>🔁 もう一度プレイ</button>
    </div>
  );
}
