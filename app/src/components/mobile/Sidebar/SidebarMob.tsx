import React from 'react';
import CategoryWidget from '../../Sidebar/Categories/CategoryWidget';
import Roadmap from '../../Sidebar/Roadmap/Roadmap';

const SidebarMob: React.FC = () => {
  return (
    <aside className="sidebar-mob">
        <div className="product-feedback__panels mob">
            <div className="product-feedback__panel">
                <CategoryWidget />
            </div>
            <div className="product-feedback__panel">
                <Roadmap />
            </div>
        </div>
    </aside>
  )
}

export default SidebarMob