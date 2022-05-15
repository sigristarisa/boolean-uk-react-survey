import RadioButton from "./RadioButton";

const RadioButtons = ({ handleAnswer, name }) => {
  return (
    <ul>
      <RadioButton
        id="rate-one"
        name={name}
        value="1"
        handleAnswer={handleAnswer}
      />
      <RadioButton
        id="rate-two"
        name={name}
        value="2"
        handleAnswer={handleAnswer}
      />
      <RadioButton
        id="rate-three"
        name={name}
        value="3"
        handleAnswer={handleAnswer}
      />
      <RadioButton
        id="rate-four"
        name={name}
        value="4"
        handleAnswer={handleAnswer}
      />
    </ul>
  );
};

export default RadioButtons;
