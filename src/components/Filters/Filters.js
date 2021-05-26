import FilterByName from "./FilterByName";
import FilterByColor from "./FilterByColor";
import FilterByBrand from "./FilterByBrand";
import "../../stylesheets/Main.scss";

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
      <FilterByBrand
        handleFilter={props.handleFilter}
        getBrands={props.getBrands}
        brand={props.brand}
      />
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
