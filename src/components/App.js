import logo from "../images/logo.svg";
import "../stylesheets/App.css";
import data from "../services/data.json";
import PhoneList from "./PhoneList";

function App() {
  return (
    <div>
      <PhoneList data={data} />
    </div>
  );
}

export default App;

/*


    <div className="App">
      <article>
        <img>
        <h3></h3>
        <small></small>

        <p></p>

        <button></button>
        <span></span><></i>
      </article>
    </div>
*/
