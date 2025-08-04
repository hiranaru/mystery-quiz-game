export default function StartScreen({ onStart }) {
  return (
    <div className="start-screen">
      <h1 className="start-title">閃けば5秒で解けるミステリー</h1>
      <p className="start-subtitle">その違和感を見逃すな。</p>
      <button className="start-button" onClick={onStart}>
        ▶ ゲームスタート
      </button>
    </div>
  );
}
