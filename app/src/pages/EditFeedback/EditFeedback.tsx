import React from "react";
import Wrapper from "../../components/Wrapper/Wrapper";
import FeedbackFormWrapper from "../../components/FeedbackFormWrapper/FeedbackFormWrapper";
import FeedbackFormContainer from "../../components/FeedbackFormContainer/FeedbackFormContainer";
import SharedNavBanner from "../../components/SharedNavBanner/SharedNavBanner";
import { ReactComponent as EditIcon } from "../../assets/shared/icon-edit-feedback.svg";
import { useParams } from "react-router-dom";

const EditFeedback = () => {
  const { id } = useParams();
  return (
    <Wrapper>
      <SharedNavBanner
        historyPath={`/${id}`}
        urlPath={undefined}
        hasAccompanyingButton={false}
        feedbackId={undefined}
      />
      <FeedbackFormContainer icon={<EditIcon />} iconType="edit-feedback">
        <FeedbackFormWrapper>edit feedback</FeedbackFormWrapper>
      </FeedbackFormContainer>
    </Wrapper>
  );
};

export default EditFeedback;
