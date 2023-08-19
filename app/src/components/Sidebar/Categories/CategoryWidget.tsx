import React from 'react'

interface Props {
    children: React.ReactNode
}

const CategoryWidget: React.FC<Props> = ({children}) => {
  return (
    <button className="category__widget" type="button">
        {children}
    </button>
  )
}

export default CategoryWidget