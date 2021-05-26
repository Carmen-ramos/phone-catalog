function FilterByBrand(props) {
  const handleChange = (e) => {
    props.handleFilter({
      key: "brand",
      value: e.target.value,
    });
  };

  const brandsList = props.getBrands.map((brand, i) => {
    return (
      <label key={i}>
        <input
          className="checkbox"
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
      <label htmlFor="origin" className="main__form--check stylelabel">
        Brand:
      </label>
      {brandsList}
    </>
  );
}
export default FilterByBrand;
