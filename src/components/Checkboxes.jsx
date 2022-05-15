import Checkbox from "./Checkbox";
const Checkboxes = (props) => {
  const handleAnswer = props.handleAnswer;
  const answers = props.answers;
  const name = props.name;
  const checked = props.checked;

  return (
    <ul className="checkbox-wrapper">
      {answers.map((answer, index) => (
        <Checkbox
          key={index}
          answer={answer}
          name={name}
          handleAnswer={handleAnswer}
          checked={answer.checked}
        />
      ))}
    </ul>
  );
};
export default Checkboxes;
