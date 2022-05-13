import Checkbox from "./Checkbox";
const Checkboxes = (props) => {
  const handleAnswer = props.handleAnswer;
  const answers = props.answers;

  return (
    <ul className="checkbox-wrapper">
      {answers.map((answer, index) => (
        <Checkbox key={index} answer={answer} />
      ))}
    </ul>
  );
};
export default Checkboxes;
