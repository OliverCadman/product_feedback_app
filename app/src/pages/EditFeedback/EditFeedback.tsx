import React from "react";
import Wrapper from "../../components/Wrapper/Wrapper";
import SharedNavBanner from "../../components/SharedNavBanner/SharedNavBanner";
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
      <div>edit feedback</div>
    </Wrapper>
  );
};

export default EditFeedback;
