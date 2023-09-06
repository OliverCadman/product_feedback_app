import React from 'react';
import { Link } from 'react-router-dom';
import FeedbackButton from '../FeedbackButton/FeedbackButton';
import {ReactComponent as ArrowLeft} from "../../assets/shared/icon-arrow-left.svg";

const DetailNavBanner: React.FC = () => {
  return (
    <div className="flex row-between">
        <Link to="/" className="link detail-link flex centered">
            <span className="arrow-left-icon">
                <ArrowLeft />
            </span>
            Go Back
            </Link>
        <FeedbackButton className="btn-blue" textContent="Edit Feedback" />
    </div>
  )
}

export default DetailNavBanner