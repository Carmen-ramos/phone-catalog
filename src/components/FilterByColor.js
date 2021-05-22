function FilterByColor(props) {
  const handleChange = (ev) => {
    props.handleFilter({
      key: "color",
      value: ev.target.value,
    });
  };

  return (
    <label htmlFor="color" className="main__form--input">
      Color:{" "}
      <select
        className="block"
        name="color"
        id="color"
        value={props.color}
        onChange={handleChange}
      >
        <option value="all">All</option>
        <option value="Black">Black</option>
        <option value="White">White</option>
        <option value="Red">Red</option>
      </select>
    </label>
  );
}
export default FilterByColor;
