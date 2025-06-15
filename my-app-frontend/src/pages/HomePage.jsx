import React from "react";

const subjects = ["Quantitative Aptitude", "Reasoning", "English", "General Awareness", "Computer"];

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      {/* Header */}
      <header className="text-center py-6">
        <h1 className="text-4xl font-bold text-blue-700">MCQ Practice Hub</h1>
        <p className="text-gray-600 mt-2">Boost your preparation with subject-wise practice tests</p>
      </header>

      {/* Start Button */}
      <div className="flex justify-center mt-6">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition">
          Start Practice
        </button>
      </div>

      {/* Subjects Grid */}
      <section className="mt-10 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Choose a Subject</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {subjects.map((subject, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-xl shadow hover:shadow-lg cursor-pointer text-center"
            >
              <p className="text-lg font-medium text-gray-700">{subject}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
