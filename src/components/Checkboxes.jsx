const Checkboxes = () => {
  return (
    <ul>
      <li>
        <label>
          <input name="spend-time" type="checkbox" value="itsYellow" />
          It's yellow!
        </label>
      </li>
      <li>
        <label>
          <input name="spend-time" type="checkbox" value="squeak" />
          It squeaks!
        </label>
      </li>
      <li>
        <label>
          <input name="spend-time" type="checkbox" value="hasLogo" />
          It has a logo!
        </label>
      </li>
      <li>
        <label>
          <input name="spend-time" type="checkbox" value="itsBig" />
          It's big!
        </label>
      </li>
    </ul>
  );
};

export default Checkboxes;
