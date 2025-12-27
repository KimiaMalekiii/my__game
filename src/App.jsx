import { useEffect, useState } from "react";

function App() {
  const TARGET_SCORE = 15;
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(30);
  const [position, setPosition] = useState({ top: 100, left: 100 });
  const [gameOver, setGameOver] = useState(false);

  // مشخص می‌کنیم برنده کیه
  const isWinner = score >= TARGET_SCORE;

  // تایمر
  useEffect(() => {
    if (gameOver) return;

    const timer = setInterval(() => {
      setTime(prev => {
        if (prev <= 1) {
          setGameOver(true);
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [gameOver]);

  // حرکت دایره
  const moveCircle = () => {
    if (gameOver) return;

    

    setPosition({
      top: Math.random() *300,
      left: Math.random() * 300,
    });

    setScore(prev => prev + 1);
  };

  // ریست کردن بازی
  const restartGame = () => {
    setScore(0);
    setTime(30);
    setGameOver(false);
    setPosition({ top: 100, left: 100 });
  };

  return (
    <div className="h-screen bg-slate-900 text-white flex flex-col items-center justify-center relative overflow-hidden">
      <h1 className="text-3xl font-bold mb-4">🎯 Click The Circle</h1>

      <div className="flex gap-6 mb-6 text-lg">
        <span>⏱ Time: {time}</span>
        <span>⭐ Score: {score}</span>
        <span>🎯 Target: {TARGET_SCORE}</span>
      </div>

      {!gameOver && (
        <div
          onClick={moveCircle}
          className="w-16 h-16 bg-sky-400 rounded-full absolute cursor-pointer hover:scale-110 transition"
          style={{ top: position.top, left: position.left }}
        />
      )}

      {gameOver && (
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-2xl font-semibold text-green-400">
            🎉 Game Over! Score: {score}
          </h2>
          <h2
            className={`text-2xl font-semibold ${
              isWinner ? "text-green-400" : "text-red-400"
            }`}
          >
            {isWinner ? "🏆 You Win!" : "❌ You Lose!"}
          </h2>
          <button
            onClick={restartGame}
            className="px-6 py-2 bg-green-500 hover:bg-green-600 rounded text-black font-semibold"
          >
            Restart
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
