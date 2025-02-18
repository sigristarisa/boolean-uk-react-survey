const AnswerItem = ({ answerItem }) => {
  return (
    <li>
      <article className="answer">
        <h3>{answerItem.username || "Anonymus"} said:</h3>
        <p>
          <em>How do you rate your rubber duck colour?</em>
          <span className="answer__line">{answerItem.review}</span>
        </p>
        {/* <p>
          <em>How do you like to spend time with your rubber duck?</em>
         
        </p> */}
        <p>
          <em>What else have you got to say about your rubber duck?</em>
          <span className="answer__line">{answerItem.review}</span>
        </p>
      </article>
    </li>
  );
};

export default AnswerItem;
