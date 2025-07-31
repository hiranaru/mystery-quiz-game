export default function StartScreen({ onStart }) {
  return (
    <div className="start-screen">
      <h1 className="start-title">🕵️‍♂️ ミステリークイズ</h1>
      <p className="start-subtitle">あなたの推理力が試される…</p>
      <button className="start-button" onClick={onStart}>
        ▶ ゲームスタート
      </button>
    </div>
  );
}
