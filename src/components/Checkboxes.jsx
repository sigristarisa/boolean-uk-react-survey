import Checkbox from "./Checkbox";
const Checkboxes = (props) => {
  const handleAnswer = props.handleAnswer;
  const answers = props.answers;
  const name = props.name;
  const survey = props.survey;

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
