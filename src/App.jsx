import { useState } from "react";
import questions from "./data/questions.json";

export default function App() {
  const [started, setStarted] = useState(false);
  const [current, setCurrent] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const [selected, setSelected] = useState(null);
  const q = questions[current];

  if (!started) {
    return (
      <div style={{ textAlign: "center", marginTop: "30vh" }}>
        <h1>🕵️ 閃けば5秒で解けるミステリー</h1>
        <button onClick={() => setStarted(true)}>スタート</button>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "2rem" }}>
      <h2>Q{current + 1}. {q.question}</h2>
      {selected === null ? (
        <>
          {q.options.map((opt, i) => (
            <button key={i} onClick={() => setSelected(i)} style={{ display: "block", margin: "8px 0" }}>
              {opt}
            </button>
          ))}
          <button onClick={() => setShowHint(true)}>ヒントを見る</button>
          {showHint && <p><strong>ヒント:</strong> {q.hint}</p>}
        </>
      ) : (
        <>
          <p>{selected === q.answer ? "✅ 正解！" : "❌ 不正解..."}</p>
          <p><strong>解説:</strong> {q.explanation}</p>
          <button onClick={() => {
            setCurrent((prev) => prev + 1);
            setSelected(null);
            setShowHint(false);
          }}>次の問題へ</button>
        </>
      )}
    </div>
  );
}
