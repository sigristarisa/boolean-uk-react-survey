import { useState } from "react";
import Form from "./Form";

const Main = () => {
  const [open, setOpen] = useState(false);

  return (
    <main className="main">
      <section className={`main__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        {/* answers should go here */}
      </section>
      <section className="main__form">
        <Form />
      </section>
    </main>
  );
};

export default Main;
