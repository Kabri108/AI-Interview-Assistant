import React from "react";

function CandidateDetail({ candidate, onBack }) {
  if (!candidate) return null;

  return (
    <div>
      <button
        className="mb-4 bg-gray-500 text-white px-3 py-1 rounded hover:bg-gray-600"
        onClick={onBack}
      >
        Back
      </button>

      <h2 className="text-xl font-bold mb-2">{candidate.name}'s Details</h2>
      <p>Email: {candidate.email}</p>
      <p>Phone: {candidate.phone}</p>
      <p>Score: {candidate.score ?? "-"}</p>
      <p>Summary: {candidate.summary ?? "-"}</p>

      <div className="mt-4">
        <h3 className="font-bold mb-2">Chat History</h3>
        <div className="border p-2 rounded max-h-80 overflow-auto">
          {candidate.answers?.map((item, idx) => (
            <div key={idx} className="mb-2">
              <p className="font-semibold">Q: {item.question}</p>
              <p>A: {item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CandidateDetail;
