import React from 'react';
import Suggestion from '../Suggestion/Suggestion';
import { UseAppContext } from '../../context/AppDataContext';

const SuggestionList = () => {
  const {state} = UseAppContext();
  console.log(state)
  return (
    <section className="section-list">
        {
            state.productRequests?.map((request) => {
                const {id, description, status, title, upvotes, comments, category} = request;
                return (
                    <Suggestion 
                        key={id}
                        id={id}
                        description={description}
                        status={status}
                        title={title}
                        upvotes={upvotes}
                        comments={comments}
                        category={category}
                        page="product-feedback"
                    />
                )

     
            })
        }
    </section>
  )
}

export default SuggestionList