const Checkbox = (props) => {
  const handleAnswer = props.handleAnswer;
  const answer = props.answer;
  const name = props.name;
  const checked = props.checked;

  return (
    <li>
      <label>
        <input
          name={name}
          type="checkbox"
          value={answer}
          checked={checked}
          onChange={handleAnswer}
        />
        {answer}
      </label>
    </li>
  );
};

export default Checkbox;
