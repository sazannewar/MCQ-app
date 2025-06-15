import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ExamPage from "./pages/ExamPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/exam/:subjectId" element={<ExamPage />} />
      </Routes>
    </Router>
  );
}

export default App;


