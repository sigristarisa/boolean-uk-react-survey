import { useState } from "react";
import Form from "./Form";

const Main = (props) => {
  const [open, setOpen] = useState(false);
  const handleAnswer = props.handleAnswer;

  return (
    <main className="main">
      <section className={`main__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        {/* answers should go here */}
      </section>
      <section className="main__form">
        <Form handleAnswer={handleAnswer} />
      </section>
    </main>
  );
};

export default Main;
