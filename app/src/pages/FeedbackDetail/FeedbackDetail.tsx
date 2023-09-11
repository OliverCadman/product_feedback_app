import React from 'react';
import DetailNavBanner from '../../components/DetailNavBanner/DetailNavBanner';
import Suggestion from '../../components/Suggestion/Suggestion';
import { useParams } from 'react-router-dom';
import { UseAppContext } from '../../context/AppDataContext';
import CommentList from '../../components/CommentList/CommentList';
import CommentInput from '../../components/CommentInput/CommentInput';
import { RefContextProvider } from '../../context/RefContext';

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
          <RefContextProvider>
            <CommentList comments={comments} />
          </RefContextProvider>
        </div>
        <div className="comment-input__container white-bg border-10">
          <h2>Add Comment</h2>
          <CommentInput />
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