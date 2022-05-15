import Checkbox from "./Checkbox";
const Checkboxes = ({ handleAnswer, answers, name, survey }) => {
  return (
    <ul className="checkbox-wrapper">
      {answers.map((answer, index) => (
        <Checkbox
          key={index}
          name={name}
          answer={answer}
          handleAnswer={handleAnswer}
          checked={survey.answer}
        />
      ))}
    </ul>
  );
};
export default Checkboxes;
