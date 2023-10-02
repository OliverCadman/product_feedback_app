import { ReactComponent as NoFeedbackIcon } from "../../assets/suggestions/illustration-empty.svg";
import { Link } from "react-router-dom";

const NoFeedbackAlert = () => {
  return (
    <section className="no-feedback__container flex centered">
      <div className="no-feedback__content">
        <NoFeedbackIcon />
        <h2>There is no feedback yet.</h2>
        <p>
          Got a suggestion? Found a bug that needs to be squashed? We love
          hearing about new ideas to improve our app.
        </p>
        <Link to="/add-feedback" className="btn btn-magenta link-btn">
          + Add Feedback
        </Link>
      </div>
    </section>
  );
};

export default NoFeedbackAlert;
