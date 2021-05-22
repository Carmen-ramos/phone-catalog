import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import data from "../services/data.json";
import PhoneList from "./PhoneList";
import PhoneInformation from "./PhoneInformation";
import Filters from "./Filters";
import Footer from "./Footer";
import Header from "./Header";
import "../stylesheets/Main.scss";

function App() {
  const [phones, setPhones] = useState(data);
  const [name, setName] = useState("");
  const [color, setColor] = useState("All");

  //function to render phone information
  const renderInformation = (props) => {
    const id = parseInt(props.match.params.id);
    const selectPhone = data.find((phone) => {
      return phone.id === id;
    });
    return <PhoneInformation phone={selectPhone} />;
  };

  const handleFilter = (inputData) => {
    if (inputData.key === "name") {
      setName(inputData.value);
    } else if (inputData.key === "color") {
      setColor(inputData.value);
    }
  };

  const filterPhones = phones
    .filter((phone) => {
      return phone.name.toLowerCase().includes(name);
    })
    .filter((phone) => {
      return color === "All" ? true : phone.color === color;
    });

  const resetButton = () => {
    setName("");
    setColor("All");
  };

  return (
    <div>
      <Header />
      <main className="main">
        <Filters
          name={name}
          color={color}
          handleFilter={handleFilter}
          resetButton={resetButton}
        />
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
