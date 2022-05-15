const RadioButton = ({ id, name, value, handleAnswer }) => {
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
