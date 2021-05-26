import "../../stylesheets/Main.scss";

function FilterByBrand(props) {
  const handleChange = (e) => {
    props.handleFilter({
      key: "brand",
      value: e.target.value,
    });
  };

  const brandsList = props.getBrands.map((brand, i) => {
    return (
      <label key={i} className="containerCheck__title">
        <input
          className="containerCheck__box"
          type="checkbox"
          name="brand"
          value={brand}
          checked={props.brand.includes(brand)}
          onChange={handleChange}
        />
        {brand}
      </label>
    );
  });
  return (
    <>
      <label htmlFor="brand" className="main__form--input stylelabel">
        Brand:
      </label>
      <div className="containerCheck">{brandsList}</div>
    </>
  );
}
export default FilterByBrand;
