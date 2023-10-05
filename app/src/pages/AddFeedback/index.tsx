import React from "react";
import Wrapper from "../../components/Wrapper/Wrapper";
import SharedNavBanner from "../../components/SharedNavBanner/SharedNavBanner";
import FeedbackFormContainer from "../../components/FeedbackFormContainer/FeedbackFormContainer";
import FeedbackFormWrapper from "../../components/FeedbackFormWrapper/FeedbackFormWrapper";
import SharedFeedbackHeader from "../../components/SharedFeedbackHeader/SharedFeedbackHeader";
import { ReactComponent as PlugSVG } from "../../assets/shared/icon-new-feedback.svg";
import FeedbackForm from "../../components/FeedbackForm/FeedbackForm";
import { UseSidebarClose } from "../../hooks/UseSidebarClose";

const AddFeedback: React.FC = () => {
  const sidebar = UseSidebarClose();

  return (
    <Wrapper>
      <SharedNavBanner
        urlPath={undefined}
        historyPath="/product_feedback_app/"
        hasAccompanyingButton={false}
        feedbackId={undefined}
      />
      <FeedbackFormContainer icon={<PlugSVG />} iconType="add-feedback">
        <SharedFeedbackHeader textContent="Create New Feedback" />
        <FeedbackFormWrapper>
          <FeedbackForm isEditing={false} />
        </FeedbackFormWrapper>
      </FeedbackFormContainer>
    </Wrapper>
  );
};

export default AddFeedback;
