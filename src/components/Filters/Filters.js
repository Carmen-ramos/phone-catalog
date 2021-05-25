import FilterByName from "./Filters/FilterByName";
import FilterByColor from "./Filters/FilterByColor";
import "../stylesheets/Main.scss";

function Filters(props) {
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };
  const handleClick = () => {
    props.resetButton();
  };

  return (
    <form onSubmit={handleSubmit} className="main__form">
      <FilterByName handleFilter={props.handleFilter} name={props.name} />
      <FilterByColor handleFilter={props.handleFilter} color={props.color} />
      <input
        type="button"
        value="Reset"
        onClick={handleClick}
        className="main__form--reset"
      />
    </form>
  );
}

export default Filters;
