import React from "react";

function WelcomeBackModal({ isOpen, candidateName, onResume, onRestart }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-96 text-center shadow-lg">
        <h2 className="text-xl font-bold mb-4">Welcome Back, {candidateName}!</h2>
        <p className="mb-6">
          You have an unfinished interview. Resume or start over?
        </p>
        <div className="flex justify-around">
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            onClick={onResume}
          >
            Resume
          </button>
          <button
            className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
            onClick={onRestart}
          >
            Restart
          </button>
        </div>
      </div>
    </div>
  );
}

export default WelcomeBackModal;
