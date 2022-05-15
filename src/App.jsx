import { useState } from "react";
import "./styles/styles.css";

import Header from "./components/Header";
import Main from "./components/Main";

const initialSurvey = {
  bestFeature: {
    "It is yellow!": false,
    "It squeaks!": false,
    "It has a logo!": false,
    "It's big!": false,
  },
  worstFeature: {
    "It is yellow!": false,
    "It squeaks!": false,
    "It has a logo!": false,
    "It's big!": false,
  },
  consistencyRate: "",
  colorRate: "",
  logoRate: "",
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

const App = () => {
  const [survey, setSurvey] = useState(initialSurvey);
  const [bestFeature, setBestFeature] = useState(initialSurvey.bestFeature);
  const [worstFeature, setWorstFeature] = useState(initialSurvey.worstFeature);
  const [spendTime, setSpendTime] = useState(initialSurvey.spendTime);

  const handleAnswer = (e) => {
    console.log(e.target);
    const { name, value, checked } = e.target;
    if (name === "bestFeature") {
      const clickedBestFeatures = [...bestFeature, value];
      setBestFeature(clickedBestFeatures);
      setSurvey({ ...survey, bestFeature: bestFeature });
    }
    if (name === "worstFeature") {
      const clickedWorstFeatures = [...worstFeature, value];
      setWorstFeature(clickedWorstFeatures);
      setSurvey({ ...survey, worstFeature: worstFeature });
    }
    if (name === "consistencyRate") {
      setSurvey({ ...survey, consistencyRate: value });
    }
    if (name === "colorRate") {
      setSurvey({ ...survey, colorRate: value });
    }
    if (name === "logoRate") {
      setSurvey({ ...survey, logoRate: value });
    }
    if (name === "email") {
      setSurvey({ ...survey, email: value });
    }
    if (name === "spendTime") {
      const clickedSpendTime = [...spendTime, value];
      setBestFeature(clickedSpendTime);
      setSurvey({ ...survey, spendTime: spendTime });
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
        survey={survey}
      />
    </div>
  );
};

export default App;
