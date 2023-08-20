import React from 'react'

const Roadmap: React.FC = () => {
  return (
    <div className="product-feedback__panel widget-container">
        <div className="roadmap__header flex row-between align-center">
            <h2>Roadmap</h2>
            <a href="#" className="roadmap__link">View</a>
        </div>
        <div className="roadmap__items">
            <ul className="roadmap__items-list">
                <li>
                    <div className="flex row-between">
                        <p>Planned</p>
                        <p>2</p>
                    </div>
                </li>
                <li>
                    <div className="flex row-between">
                        <p>In-Progress</p>
                        <p>3</p>
                    </div>
                </li>
                <li>
                    <div className="flex row-between">
                        <p>Live</p>
                        <p>1</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Roadmap