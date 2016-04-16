function Birthdate({props, createEventHandler}) {
  const {date} = props;

  const handleChange = createEventHandler();

  return (
    <div className="birthdate-container">
      <label for="birthdate">Enter your birthday</label>
      <input type="date" name="birthdate" value={date} onChange={handleChange} />
    </div>
  );
}

module.exports = Birthdate;
