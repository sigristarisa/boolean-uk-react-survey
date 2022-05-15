import RadioButtons from "./RadioButtons";
import Checkboxes from "./Checkboxes";

const Form = (props) => {
  const handleSubmit = props.handleSubmit;
  const handleAnswer = props.handleAnswer;
  const spendTimeAnswers = props.spendTimeAnswers;
  console.log(spendTimeAnswers);

  return (
    <form class="form" onSubemit={handleSubmit}>
      <h2>Tell us what you think about your rubber duck!</h2>
      <div class="form__group radio">
        <h3>How do you rate your rubber duck colour?</h3>
        <RadioButtons handleAnswer={handleAnswer} name={"colorRate"} />
      </div>
      <div class="form__group">
        <h3>How do you like to spend time with your rubber duck</h3>
        <Checkboxes
          handleAnswer={handleAnswer}
          name={"spendTime"}
          answers={spendTimeAnswers}
        />
      </div>
      <label>
        What else have you got to say about your rubber duck?
        <textarea name="review" cols="30" rows="10"></textarea>
      </label>
      <label>
        Put your name here (if you feel like it):
        <input type="text" name="username" value="" />
      </label>
      <label>
        Leave us your email pretty please??
        <input type="email" name="email" value="" />
      </label>
      <input class="form__submit" type="submit" value="Submit Survey!" />
    </form>
  );
};

export default Form;
