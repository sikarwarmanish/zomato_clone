// import React from 'react';
// import ExploreCard from './exploreCard';
// import "./exploreSection.css";

// function ExploreSection({list, collectionName}) {
//     return (
//         <div className="max-width explore-section">
//             <div className="collection-title">{collectionName}</div>
//             <div className="explore-grid">
//                 {list.map((restaurant) => {
//                     return <ExploreCard restaurant={restaurant} />;
//                 })}

//             </div>
        
//         </div>
//     );
// }

// export default ExploreSection;

import React from "react";
import ExploreCard from "./exploreCard";
import "./exploreSection.css";

const ExploreSection = ({ restaurants, collectionName }) => {
  return (
    <div className="max-width explore-section">
      <div className="collection-title">{collectionName}</div>
      <div className="explore-grid">
        {restaurants.map((restaurant, i) => (
          <ExploreCard restaurant={restaurant} i={i} />
        ))}
      </div>
    </div>
  );
};

export default ExploreSection;