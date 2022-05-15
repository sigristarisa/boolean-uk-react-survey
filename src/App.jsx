import { useState } from "react";
import "./styles/styles.css";

import Header from "./components/Header";
import Main from "./components/Main";

const initialSurvey = {
  colorRate: "",
  spendTime: {
    Swimming: false,
    Bathing: false,
    Chatting: false,
    "I don't like to spend time with it": false,
  },
  review: "",
  username: "",
  email: "",
};

const spendTimeAnswers = Object.keys(initialSurvey.spendTime);

const App = () => {
  const [survey, setSurvey] = useState(initialSurvey);

  const handleAnswer = (e) => {
    const { name, value, checked } = e.target;
    if (name === "colorRate") {
      setSurvey({ ...survey, colorRate: value });
    }
    if (name === "spendTime") {
      setSurvey({ ...survey.name, [value]: !checked });
    }
    if (name === "email") {
      setSurvey({ ...survey, email: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(survey);
  };

  return (
    <div className="App">
      <Header />
      <Main
        handleSubmit={handleSubmit}
        handleAnswer={handleAnswer}
        spendTimeAnswers={spendTimeAnswers}
      />
    </div>
  );
};

export default App;
