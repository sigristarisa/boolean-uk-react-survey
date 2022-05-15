import { useState } from "react";
import Form from "./Form";

const Main = (props) => {
  const [open, setOpen] = useState(false);
  const handleSubmit = props.handleSubmit;
  const handleAnswer = props.handleAnswer;
  const survey = props.survey;

  return (
    <main className="main">
      <section className={`main__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        {/* answers should go here */}
      </section>
      <section className="main__form">
        <Form
          handleSubmit={handleSubmit}
          handleAnswer={handleAnswer}
          survey={survey}
        />
      </section>
    </main>
  );
};

export default Main;
