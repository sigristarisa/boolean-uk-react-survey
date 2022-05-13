import Checkbox from "./Checkbox";
const Checkboxes = (props) => {
  const handleAnswer = props.handleAnswer;
  const answers = props.answers;
  const name = props.name;

  return (
    <ul className="checkbox-wrapper">
      {answers.map((answer, index) => (
        <Checkbox
          key={index}
          answer={answer}
          name={name}
          handleAnswer={handleAnswer}
        />
      ))}
    </ul>
  );
};
export default Checkboxes;
