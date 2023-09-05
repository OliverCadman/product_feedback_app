import React from 'react'

const CategoryWidget: React.FC = () => {
  return (
     <div className="product-feedback__panel widget-container categories">
          <div className="categories__widget-wrapper flex">
            {Array.from(new Array(6)).map((x, i) => {
              return <button className="category__widget" type="button" key={i}>
                        UX
                    </button>
            })}
          </div>
        </div>
    
  )
}

export default CategoryWidget