import { useState } from "react";
import Form from "./Form";
import AnswerList from "./AnswerList.js";

const Main = ({
  handleSubmit,
  handleAnswer,
  survey,
  spendTimeAnswers,
  answerList,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <main className="main">
      <section className={`main__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        <AnswerList answerList={answerList} />
      </section>
      <section className="main__form">
        <Form
          handleSubmit={handleSubmit}
          handleAnswer={handleAnswer}
          survey={survey}
          spendTimeAnswers={spendTimeAnswers}
        />
      </section>
    </main>
  );
};

export default Main;
