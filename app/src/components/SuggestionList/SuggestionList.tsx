import React from 'react';
import Suggestion from '../Suggestion/Suggestion';

const SuggestionList = () => {
  return (
    <section className="section-list">
        {Array.from(new Array(5)).map(_ => {
            return <Suggestion />
        })}
    </section>
  )
}

export default SuggestionList