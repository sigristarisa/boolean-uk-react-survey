import RadioButtons from "./RadioButtons";
import Checkboxes from "./Checkboxes";

const Form = (props) => {
  const handleSubmit = props.handleSubmit;
  const handleAnswer = props.handleAnswer;
  const survey = props.survey;

  const features = Object.keys(survey.bestFeature);
  const spendTime = Object.keys(survey.spendTime);

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Tell us what you think about your rubber duck!</h2>
      <div className="form__group checkbox">
        <h3>
          What would you say that are the best features of your rubber duck?
        </h3>
        <Checkboxes
          handleAnswer={handleAnswer}
          answers={features}
          name={"bestFeature"}
          checked={survey.bestFeature}
        />
      </div>
      <div className="form__group checkbox">
        <h3>What would you say that are the worst bits of your rubber duck?</h3>
        <Checkboxes
          handleAnswer={handleAnswer}
          answers={features}
          name={"worstFeature"}
          checked={survey.worstFeature}
        />
      </div>
      <div className="form__group radio">
        <h3>How do you rate your rubber duck consistency?</h3>
        <RadioButtons handleAnswer={handleAnswer} name={"consistencyRate"} />
      </div>
      <div className="form__group radio">
        <h3>How do you rate your rubber duck colour?</h3>
        <RadioButtons handleAnswer={handleAnswer} name={"colorRate"} />
      </div>
      <div className="form__group radio">
        <h3>How do you rate your rubber duck logo?</h3>
        <RadioButtons handleAnswer={handleAnswer} name={"logoRate"} />
      </div>
      <div className="form__group checkbox">
        <h3>How do you like to spend time with your rubber duck?</h3>
        <Checkboxes
          handleAnswer={handleAnswer}
          answers={spendTime}
          name={"spendTime"}
          checked={survey.spendTime}
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
      <input className="form__submit" type="submit" value="Submit Survey!" />
    </form>
  );
};

export default Form;
