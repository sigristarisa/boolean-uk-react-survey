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
  const [answerList, setAnswerList] = useState([]);

  const handleAnswer = (e) => {
    const { name, value, checked } = e.target;
    if (name === "colorRate") {
      setSurvey({ ...survey, colorRate: value });
    }
    if (name === "spendTime") {
      const clickedAnswer = { ...survey[name], [value]: checked };
      console.log(clickedAnswer);
      setSurvey({ ...survey, spendTime: clickedAnswer });
    }
    if (name === "review") {
      setSurvey({ ...survey, review: value });
    }
    if (name === "username") {
      setSurvey({ ...survey, username: value });
    }
    if (name === "email") {
      setSurvey({ ...survey, email: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setAnswerList([...answerList, survey]);
    setSurvey(initialSurvey);
  };

  return (
    <div className="App">
      <Header />
      <Main
        handleSubmit={handleSubmit}
        handleAnswer={handleAnswer}
        survey={survey}
        spendTimeAnswers={spendTimeAnswers}
        answerList={answerList}
      />
    </div>
  );
};

export default App;
