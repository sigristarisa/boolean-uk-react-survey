const Checkbox = (props) => {
  const answer = props.answer;
  return (
    <li>
      <label>
        <input name="feature" type="checkbox" value={answer} />
        {answer}
      </label>
    </li>
  );
};

export default Checkbox;
