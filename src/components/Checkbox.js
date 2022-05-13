const Checkbox = (props) => {
  const handleAnswer = props.handleAnswer;
  const answer = props.answer;
  const name = props.name;
  return (
    <li>
      <label>
        <input
          name={name}
          type="checkbox"
          value={answer}
          onChange={handleAnswer}
        />
        {answer}
      </label>
    </li>
  );
};

export default Checkbox;
