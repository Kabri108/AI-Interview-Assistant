import React, { useState, useMemo } from "react";
import { useSelector } from "react-redux";
import CandidateTable from "../components/dashboard/CandidateTable";
import CandidateDetail from "../components/dashboard/CandidateDetail";

function InterviewerPage() {
  const candidates = useSelector((state) => state.candidates.list);
  const [selectedId, setSelectedId] = useState(null);
  const [search, setSearch] = useState("");
  const [sortByScore, setSortByScore] = useState(false);

  const selectedCandidate = candidates.find((c) => c.id === selectedId);

  // Filter and sort candidates
  const filteredCandidates = useMemo(() => {
    let list = candidates.filter(
      (c) =>
        c.name.toLowerCase().includes(search.toLowerCase()) ||
        c.email.toLowerCase().includes(search.toLowerCase())
    );
    if (sortByScore) {
      list.sort((a, b) => (b.score || 0) - (a.score || 0));
    }
    return list;
  }, [candidates, search, sortByScore]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Interviewer Dashboard</h1>

      {!selectedCandidate && (
        <>
          <div className="flex mb-4 gap-2">
            <input
              type="text"
              placeholder="Search by name/email"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="border p-2 rounded w-64"
            />
            <button
              className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
              onClick={() => setSortByScore(!sortByScore)}
            >
              {sortByScore ? "Unsort" : "Sort by Score"}
            </button>
          </div>

          <CandidateTable candidates={filteredCandidates} onSelect={setSelectedId} />
        </>
      )}

      {selectedCandidate && (
        <CandidateDetail candidate={selectedCandidate} onBack={() => setSelectedId(null)} />
      )}
    </div>
  );
}

export default InterviewerPage;
