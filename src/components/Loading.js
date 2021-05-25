import loading from "../images/loading.gif";
import "../stylesheets/Loading.scss";

const Loading = (props) => {
  if (props.loading) {
    return (
      <div className="loading">
        <img className="loading__image" src={loading} alt="Loading logo" />
      </div>
    );
  } else {
    return null;
  }
};

export default Loading;
