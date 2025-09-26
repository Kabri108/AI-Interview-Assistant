import React, { useState } from "react";
import IntervieweePage from "./pages/IntervieweePage";
import InterviewerPage from "./pages/InterviewerPage";

function App() {
  const [activeTab, setActiveTab] = useState("interviewee");

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-blue-600 text-white p-4 flex gap-4">
        <button
          className={`px-3 py-1 rounded ${
            activeTab === "interviewee" ? "bg-white text-blue-600" : ""
          }`}
          onClick={() => setActiveTab("interviewee")}
        >
          Interviewee
        </button>
        <button
          className={`px-3 py-1 rounded ${
            activeTab === "interviewer" ? "bg-white text-blue-600" : ""
          }`}
          onClick={() => setActiveTab("interviewer")}
        >
          Interviewer
        </button>
      </nav>

      <main className="p-4">
        {activeTab === "interviewee" && <IntervieweePage />}
        {activeTab === "interviewer" && <InterviewerPage />}
      </main>
    </div>
  );
}

export default App;
