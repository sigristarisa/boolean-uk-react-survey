const RadioButton = (props) => {
  const id = props.id;
  const name = props.name;
  const value = props.value;
  const handleAnswer = props.handleAnswer;

  return (
    <li>
      <input
        id={id}
        type="radio"
        name={name}
        value={value}
        onChange={handleAnswer}
      />
      <label htmlFor={id}>{value}</label>
    </li>
  );
};

export default RadioButton;
