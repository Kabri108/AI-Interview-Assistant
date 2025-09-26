import React, { useState } from "react";
import QuestionCard from "../components/chat/QuestionCard";
import Timer from "../components/chat/Timer";
import { questions } from "../utils/questions"; // fallback questions

function IntervieweePage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(""));
  const [finished, setFinished] = useState(false);
  const [timerKey, setTimerKey] = useState(0);

  const handleAnswerChange = (value) => {
    const newAnswers = [...answers];
    newAnswers[currentIndex] = value;
    setAnswers(newAnswers);
  };

  const handleTimeUp = () => {
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(currentIndex + 1);
      setTimerKey((k) => k + 1); // reset timer
    } else {
      setFinished(true);
      // TODO: Calculate score + summary
    }
  };

  if (finished) {
    return (
      <div>
        <h2 className="text-xl font-bold">Interview Completed!</h2>
        <p>Your answers:</p>
        {answers.map((a, idx) => (
          <div key={idx}>
            <p>
              Q: {questions[idx]} <br />
              A: {a}
            </p>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Interview</h2>
      <Timer
        duration={questions[currentIndex].duration}
        onTimeUp={handleTimeUp}
        resetKey={timerKey}
      />
      <QuestionCard
        question={questions[currentIndex].text}
        answer={answers[currentIndex]}
        onAnswerChange={handleAnswerChange}
      />
      <button
        onClick={handleTimeUp}
        className="mt-2 bg-blue-500 text-white px-3 py-1 rounded"
      >
        Submit & Next
      </button>
    </div>
  );
}

export default IntervieweePage;
