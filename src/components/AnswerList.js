import AnswerItem from "./AnswerItem";

const AnswerList = ({ answerList }) => {
  return (
    <ul>
      {answerList.map((answerItem, index) => (
        <AnswerItem answerItem={answerItem} key={index} />
      ))}
    </ul>
  );
};

export default AnswerList;
