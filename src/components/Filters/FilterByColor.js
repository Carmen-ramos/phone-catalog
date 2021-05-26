function FilterByColor(props) {
  const handleChange = (ev) => {
    props.handleFilter({
      key: "color",
      value: ev.target.value,
    });
  };

  return (
    <label htmlFor="color" className="main__form--input stylelabel">
      Color:{" "}
      <select
        name="color"
        id="color"
        value={props.color}
        onChange={handleChange}
      >
        <option value="All">All</option>
        <option value="Black">Black</option>
        <option value="White">White</option>
        <option value="Red">Red</option>
        <option value="Green">Green</option>
      </select>
    </label>
  );
}
export default FilterByColor;
