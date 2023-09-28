import React from "react";
import Wrapper from "../../components/Wrapper/Wrapper";
import FeedbackFormWrapper from "../../components/FeedbackFormWrapper/FeedbackFormWrapper";
import FeedbackFormContainer from "../../components/FeedbackFormContainer/FeedbackFormContainer";
import SharedNavBanner from "../../components/SharedNavBanner/SharedNavBanner";
import { ReactComponent as EditIcon } from "../../assets/shared/icon-edit-feedback.svg";
import { useParams } from "react-router-dom";
import SharedFeedbackHeader from "../../components/SharedFeedbackHeader/SharedFeedbackHeader";
import { UseAppContext } from "../../context/AppDataContext";
import { IProductRequest } from "../../types/AppData/appdata.types";
import FeedbackForm from "../../components/FeedbackForm/FeedbackForm";

const EditFeedback = () => {
  const { id } = useParams();

  const { state, dispatch } = UseAppContext();

  const feedback = state.data.productRequests.find(
    (product: IProductRequest) => {
      return product.id === id;
    },
  );

  if (feedback) {
    return (
      <Wrapper>
        <SharedNavBanner
          historyPath={`/${id}`}
          urlPath={undefined}
          hasAccompanyingButton={false}
          feedbackId={undefined}
        />
        <FeedbackFormContainer icon={<EditIcon />} iconType="edit-feedback">
          <SharedFeedbackHeader textContent={`Editing '${feedback.title}'`} />
          <FeedbackFormWrapper>
            <FeedbackForm
              isEditing={true}
              feedbackTitle={feedback.title}
              feedbackDescription={feedback.description}
              feedbackCategory={feedback.category}
              feedbackStatus={feedback.status}
            />
          </FeedbackFormWrapper>
        </FeedbackFormContainer>
      </Wrapper>
    );
  }
};

export default EditFeedback;
