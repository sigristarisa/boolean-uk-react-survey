const Checkboxes = (props) => {
  const handleAnswer = props.handleAnswer;

  return (
    <ul>
      <li>
        <label>
          <input
            name="feature"
            type="checkbox"
            value="It's yellow!"
            onChange={handleAnswer}
          />
          It's yellow!
        </label>
      </li>
      <li>
        <label>
          <input
            name="feature"
            type="checkbox"
            value="It squeak!"
            onChange={handleAnswer}
          />
          It squeaks!
        </label>
      </li>
      <li>
        <label>
          <input
            name="feature"
            type="checkbox"
            value="It has a logo!"
            onChange={handleAnswer}
          />
          It has a logo!
        </label>
      </li>
      <li>
        <label>
          <input
            name="feature"
            type="checkbox"
            value="It's big!"
            onChange={handleAnswer}
          />
          It's big!
        </label>
      </li>
    </ul>
  );
};

export default Checkboxes;
