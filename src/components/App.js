import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import data from "../services/data.json";
import PhoneList from "./PhoneList";
import PhoneInformation from "./PhoneInformation";
import Footer from "./Footer";
import Header from "./Header";

function App() {
  //function to render phone information
  const renderInformation = (props) => {
    console.log(props);
    const id = parseInt(props.match.params.id);
    const selectPhone = data.find((phone) => {
      return phone.id === id;
    });
    return <PhoneInformation phone={selectPhone} />;
  };

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/">
          <PhoneList data={data} />
        </Route>
        <Route path="/phone/:id" render={renderInformation} />
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
