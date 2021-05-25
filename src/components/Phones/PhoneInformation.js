import { Link } from "react-router-dom";
import "../stylesheets/PhoneInformation.scss";

function PhoneInformation(props) {
  console.log(props);
  return (
    <section className="phoneInf">
      <Link to="/">
        <div className="phoneInf__container">
          <i className="fas fa-arrow-circle-left phoneInf__container--arrow"></i>
          <p className="phoneInf__container--back">Back</p>
        </div>
      </Link>
      <h2 className="phoneInf__title">{props.phone.name}</h2>
      <img
        className="phoneInf__img"
        src={require(`../images/catalog/${props.phone.image}`).default}
        alt={props.phone.name}
      />
      <p className="phoneInf__paragraph">
        Brand:
        <spa className="phoneInf__description">{props.phone.manufacturer}</spa>
      </p>
      <p className="phoneInf__paragraph">
        Description:
        <spa className="phoneInf__description">{props.phone.description}</spa>
      </p>
      <p className="phoneInf__paragraph">
        Color:
        <spa className="phoneInf__description">{props.phone.color}</spa>
      </p>
      <p className="phoneInf__paragraph">
        Price:<spa className="phoneInf__description">{props.phone.price}</spa>
      </p>
      <p className="phoneInf__paragraph">
        Screen:<spa className="phoneInf__description">{props.phone.screen}</spa>
      </p>
      <p className="phoneInf__paragraph">
        Processor:
        <spa className="phoneInf__description">{props.phone.processor}</spa>
      </p>
      <p className="phoneInf__paragraph">
        RAM:<spa className="phoneInf__description">{props.phone.ram}</spa>
      </p>
    </section>
  );
}
export default PhoneInformation;
