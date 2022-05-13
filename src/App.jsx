import { useState } from "react";
import "./styles/styles.css";

import Header from "./components/Header";
import Main from "./components/Main";

const initialSurvey = {
  bestFeature: [],
  worstFeature: [],
  consistencyRate: "",
  colorRate: "",
  logoRate: "",
  spendTime: [],
  review: "",
  username: "",
  email: "",
};

const App = () => {
  const [survey, setSurvey] = useState(initialSurvey);
  const [bestFeature, setBestFeature] = useState(initialSurvey.bestFeature);

  const handleAnswer = (e) => {
    const { name, value, checked } = e.target;
    if (name === "feature") {
      const clickedFeatures = [...bestFeature, value];
      setBestFeature(clickedFeatures);
      setSurvey({ ...survey, bestFeature: bestFeature });
    }
  };

  return (
    <div className="App">
      <Header />
      <Main handleAnswer={handleAnswer} />
    </div>
  );
};

export default App;
