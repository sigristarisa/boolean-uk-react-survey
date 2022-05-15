const Checkbox = ({ handleAnswer, answer, name, checked }) => {
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
