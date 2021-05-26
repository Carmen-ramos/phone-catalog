import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import PhoneList from "./Phones/PhoneList";
import PhoneInformation from "./Phones/PhoneInformation";
import Filters from "./Filters/Filters";
import Footer from "./Footer";
import Header from "./Header";
import api from "../services/Api";
import Loading from "./Loading";
import "../stylesheets/layout/Main.scss";

function App() {
  const [phones, setPhones] = useState([]);
  const [name, setName] = useState("");
  const [color, setColor] = useState("All");
  const [brand, setBrand] = useState([]);
  const [loading, setLoading] = useState(true);

  //save the api in a state and set loading while the request is happening.
  useEffect(() => {
    api()
      .then((data) => setPhones(data))
      .then(() => setLoading(false));
  }, []);

  //function to render more phone information
  const renderInformation = (props) => {
    const id = parseInt(props.match.params.id);
    const selectPhone = phones.find((phone) => {
      return phone.id === id;
    });
    return <PhoneInformation phone={selectPhone} />;
  };
  // received inputdata and update usetate
  const handleFilter = (inputData) => {
    if (inputData.key === "name") {
      setName(inputData.value);
    } else if (inputData.key === "color") {
      setColor(inputData.value);
    } else if (inputData.key === "brand") {
      const indexBrand = brand.indexOf(inputData.value);
      if (indexBrand === -1) {
        const newBrand = [...brand];
        newBrand.push(inputData.value);
        setBrand(newBrand);
      } else {
        const newBrand = [...brand];
        newBrand.splice(indexBrand, 1);
        setBrand(newBrand);
      }
    }
  };
  //Filter api
  const filterPhones = phones
    .filter((phone) => {
      return phone.name.toLowerCase().includes(name);
    })
    .filter((phone) => {
      return color === "All" ? true : phone.color === color;
    })
    .filter((phone) => {
      return brand.length === 0 ? true : brand.includes(phone.brand);
    });

  //reset state
  const resetButton = () => {
    setName("");
    setColor("All");
    setBrand([]);
  };
  //save the brands in a new state and nor duplicate the checkbox
  const getBrands = () => {
    const brands = phones.map((phone) => phone.brand);
    return [...new Set(brands)];
  };

  return (
    <div>
      <Header />
      <main className="main">
        <Filters
          name={name}
          color={color}
          brand={brand}
          handleFilter={handleFilter}
          resetButton={resetButton}
          getBrands={getBrands()}
        />
        <Loading loading={loading} />
        <Switch>
          <Route exact path="/">
            <PhoneList phones={filterPhones} name={name} />
          </Route>
          <Route path="/phone/:id" render={renderInformation} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
