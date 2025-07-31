import { useState } from "react";
import './styles.css';
import StartScreen from "./components/StartScreen";
import QuizScreen from "./components/QuizScreen";
import ResultScreen from "./components/ResultScreen";
import questions from "./data/questions.js";

export default function App() {
  const [screen, setScreen] = useState("start");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  const handleStart = () => {
    setScreen("quiz");
    setCurrentQuestionIndex(0);
    setScore(0);
  };

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore((prev) => prev + 1);
    }

    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      setScreen("result");
    }
  };

  return (
    <div className="app-wrapper">
      {/* 背景や固定メニュー */}
      <div className="background" />
      <div className="logo">🕵️‍♀️ Mystery Quiz</div>
      <div className="menu">Menu</div>

      {/* スマホ幅のスクロールコンテンツ */}
      <div className="content fade-in">
        {screen === "start" && <StartScreen onStart={handleStart} />}
        {screen === "quiz" && (
          <QuizScreen
            question={questions[currentQuestionIndex]}
            onAnswer={handleAnswer}
          />
        )}
        {screen === "result" && (
          <ResultScreen
            score={score}
            total={questions.length}
            onRestart={() => setScreen("start")}
          />
        )}
      </div>
    </div>
  );
}
