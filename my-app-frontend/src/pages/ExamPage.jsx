import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ExamPage = () => {
  const { subjectId } = useParams();
  console.log("Subject ID from URL:", subjectId); // <-- Add this line for debugging
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [questionTimes, setQuestionTimes] = useState([]); // Array to store time per question
  const [timeTaken, setTimeTaken] = useState(0); // Time spent on current question
  const timerRef = useRef(null);


  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/api/questions/${subjectId}`);
        setQuestions(res.data);
      } catch (error) {
        console.error("Failed to load questions:", error);
      }
    };

    fetchQuestions();
  }, [subjectId]);

  // Start timing each question
useEffect(() => {
  setTimeTaken(0); // reset timer
  clearInterval(timerRef.current);

  timerRef.current = setInterval(() => {
    setTimeTaken((prev) => prev + 1);
  }, 1000);

  return () => clearInterval(timerRef.current); // cleanup
}, [currentIndex]);


  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

const handleNext = () => {
  clearInterval(timerRef.current); // stop timer
  setQuestionTimes((prev) => [...prev, timeTaken]); // store time
  setSelectedOption(null);
  setCurrentIndex((prev) => Math.min(prev + 1, questions.length - 1));
};


  const handleSkip = () => {
    handleNext();
  };

  const currentQuestion = questions[currentIndex];

  if (!currentQuestion) return <div className="p-6 text-center">Loading questions...</div>;

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Question {currentIndex + 1} of {questions.length}</h2>
        <div className="text-right mb-4 text-sm text-gray-600">
                ⏱️ Timer: <span className="font-semibold">{timeTaken}</span>s
        </div>

        <p className="text-gray-800 mb-6">{currentQuestion.question_text}</p>

        {/* Options */}
        <div className="space-y-3">
          {["option_a", "option_b", "option_c", "option_d", "option_e"].map((key) => (
            <div
              key={key}
              className={`border p-3 rounded cursor-pointer ${
                selectedOption === key ? "bg-blue-100 border-blue-500" : "hover:bg-gray-100"
              }`}
              onClick={() => handleOptionSelect(key)}
            >
              {currentQuestion[key]}
            </div>
          ))}
        </div>

        {/* Actions */}
        <div className="flex justify-between mt-6">
          <button
            onClick={handleSkip}
            className="bg-yellow-500 text-white px-5 py-2 rounded hover:bg-yellow-600"
          >
            Skip
          </button>
          <button
            onClick={handleNext}
            className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExamPage;
