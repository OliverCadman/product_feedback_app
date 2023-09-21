import React from 'react';
import {ReactComponent as NoFeedbackIcon} from "../../assets/suggestions/illustration-empty.svg";
import FeedbackButton from '../FeedbackButton/FeedbackButton';

const NoFeedbackAlert = () => {
  return (
    <section className="no-feedback__container centered">
        <div className="no-feedback__content">
            <NoFeedbackIcon />
            <h2>There is no feedback yet.</h2>
            <p>
                Got a suggestion? Found a bug that needs to be squashed? 
                We love hearing about new ideas to improve our app.
            </p>
            <FeedbackButton isReplyButton={false} buttonType="button" className="btn-magenta" textContent="+ Add Feedback"/>
        </div>
    </section>
  )
}

export default NoFeedbackAlert