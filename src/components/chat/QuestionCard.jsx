import React from "react";

function QuestionCard({ question, onAnswerChange, answer }) {
  return (
    <div className="border p-3 rounded mb-2 bg-white shadow">
      <p className="font-semibold mb-2">{question}</p>
      <textarea
        value={answer}
        onChange={(e) => onAnswerChange(e.target.value)}
        rows={3}
        className="w-full border rounded p-2"
        placeholder="Type your answer..."
      />
    </div>
  );
}

export default QuestionCard;
