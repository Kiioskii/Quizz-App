import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import useFech from "./Hooks/useFech";

import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";

import Quizz from "./pages/Quizz";
import Start from "./pages/Start";
import Settings from "./pages/Settings";
import FinallScreen from "./pages/Score";

function App() {
  const [displayQuizz, setDispalyQuizz] = useState(false);
  const [answers, setAnswers] = React.useState([]);
  const API_URL = "https://opentdb.com/api.php?amount=5";
  const { questions } = useFech(API_URL);

  const style = {
    backgroundColor: displayQuizz ? "#F5F7FB" : "#8f9de3",
  };

  React.useEffect(() => {
    const Answers = questions.map((question) => {
      const questionArray = [
        ...question.incorrect_answers,
        question.correct_answer,
      ];
      return questionArray;
    });

    setAnswers(Answers);
  }, [questions]);

  return (
    <Router>
      <Container maxWidth="sm">
        <Box textAlign="center" mt={5}>
          <Routes>
            <Route exact path="/" element={<Start />} />
            <Route exact path="/setings" element={<Settings />} />
            <Route
              exact
              path="/questions"
              element={<Quizz question={questions} answers={answers} />}
            />
            <Route exact path="/score" element={<FinallScreen />}></Route>
          </Routes>
        </Box>
      </Container>
    </Router>
  );
}

export default App;
