const RadioButtons = () => {
  return (
    <ul>
      <li>
        <input id="rate-one" type="radio" name="rate" value="1" />
        <label for="rate-one">1</label>
      </li>
      <li>
        <input id="rate-two" type="radio" name="rate" value="2" />
        <label for="rate-two">2</label>
      </li>
      <li>
        <input id="rate-three" type="radio" name="rate" value="3" />
        <label for="rate-three">3</label>
      </li>
      <li>
        <input id="rate-four" type="radio" name="rate" value="4" />
        <label for="rate-four">4</label>
      </li>
    </ul>
  );
};

export default RadioButtons;
