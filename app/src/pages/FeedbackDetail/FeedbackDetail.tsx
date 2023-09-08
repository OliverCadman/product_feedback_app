import React from 'react';
import DetailNavBanner from '../../components/DetailNavBanner/DetailNavBanner';
import Suggestion from '../../components/Suggestion/Suggestion';
import { useParams } from 'react-router-dom';
import { UseAppContext } from '../../context/AppDataContext';
import CommentList from '../../components/CommentList/CommentList';

const FeedbackDetail: React.FC = () => {
  const {id} = useParams();
  const {state, dispatch} = UseAppContext();
  
  const foundSuggestion = state.productRequests.find(request => request.id === id);

  if (foundSuggestion) {
    const {title, comments, status, upvotes, category, description} = foundSuggestion;
  
    return (
      <main className="feedback-detail__container">
        <DetailNavBanner />
        <div className="feedback-detail__wrapper">
          <Suggestion 
          title={title}
          comments={comments}
          status={status}
          upvotes={upvotes}
          category={category}
          description={description}
          page="feedback-detail"/>
        </div>
        <div className="comments__container white-bg border-10">
          <div className="comments__header">
              <h2>
                { comments ? `${comments.length} comments` : 'No Comments'}
              </h2>
          </div>
          <CommentList comments={comments} />
        </div>
      </main>

    )
  } else {
    return <div className="feedback-detail__container">
      <h1>Loading.</h1>
    </div>
  }
}

export default FeedbackDetail