import React from "react";

function CandidateTable({ candidates, onSelect }) {
  return (
    <table className="w-full border-collapse">
      <thead>
        <tr className="border-b">
          <th className="text-left p-2">Name</th>
          <th className="text-left p-2">Email</th>
          <th className="text-left p-2">Score</th>
          <th className="text-left p-2">Summary</th>
          <th className="p-2">Action</th>
        </tr>
      </thead>
      <tbody>
        {candidates.map((c) => (
          <tr key={c.id} className="border-b hover:bg-gray-100">
            <td className="p-2">{c.name}</td>
            <td className="p-2">{c.email}</td>
            <td className="p-2">{c.score ?? "-"}</td>
            <td className="p-2">{c.summary ?? "-"}</td>
            <td className="p-2">
              <button
                className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                onClick={() => onSelect(c.id)}
              >
                View
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default CandidateTable;
