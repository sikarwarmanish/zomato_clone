import React from 'react';
import { diningOut } from '../../data/diningOut';
import Collection from '../common/collection';
import Filters from '../common/filters';
import "./diningOut.css";

const collectionList = [
    {
        id: "1",
        title: "Trending This Week",
        cover: "https://b.zmtcdn.com/data/collections/1b8c164e8a18878468d8aabeb0b486b1_1625812715.jpg",
       places: "30 places",
    },
    {
        id: "2",
        title: "For The Family",
        cover: "https://b.zmtcdn.com/data/collections/25b0494ade2359d4e6d90e1c73ea6672_1582082248.jpg",
       places: "11 places",
    },
    {
        id: "3",
        title: "Most Romantic Restaurants",
        cover: "https://b.zmtcdn.com/data/collections/90999c2395ba9c9c40998607c8dd5af1_1581058174.jpg",
       places: "10 places",
    },
    {
        id: "4",
        title: "Legendary Outlets",
        cover: "https://b.zmtcdn.com/data/collections/2683237a53944cfd9801c2fabd5cdf32_1582082375.jpg",
       places: "9 places",
    },
    {
        id: "5",
        title: "Kebab Places",
        cover: "https://b.zmtcdn.com/data/collections/738be706f86548e91081290544449919_1427112719_l.jpg",
       places: "6 places",
    },
    {
        id: "6",
        title: "Great Buffets",
        cover: "https://b.zmtcdn.com/data/collections/1c0daad79bed143d6a59f67efb6fe196_1535355063.jpg",
       places: "11 places",
    },
    {
        id: "7",
        title: "Best Bars & Pubs",
        cover: "https://b.zmtcdn.com/data/collections/420f473015c7d64962b60bb355828192_1613380120.jpg",
       places: "14 places",
    },
    {
        id: "8",
        title: "Veggie Friendly",
        cover: "https://b.zmtcdn.com/data/collections/e15d090b71c5f3d7b135c88798604070_1618898707.jpg",
       places: "11 places",
    },
];
const diningFilters = [
    {
      id: 1,
      icon: <i className="fi fi-rr-settings-sliders absolute-center"></i>,
      title: "Filters",
    },
    {
      id: 2,
      title: "Rating: 4.0+",
    },
    {
      id: 3,
      title: "Safe and Hygienic",
    },
    {
      id: 4,
      title: "Pure Veg",
    },
    {
      id: 5,
      title: "Delivery Time",
      icon: <i className="fi fi-rr-apps-sort absolute-center"></i>,
    },
    {
      id: 6,
      title: "Great Offers",
    },
  ];
const diningList = diningOut;
function DiningOut() {
    return (
        <div>
            <Collection list={collectionList} />
            <div className="max-width">
             <Filters filterList={diningFilters} />
            </div>
        </div>
    );
}

export default DiningOut;