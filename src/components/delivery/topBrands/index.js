import React from 'react';
import Slider from 'react-slick';
import NextArrow from '../../common/carousel/nextArrow';
import PrevArrow from '../../common/carousel/prevArrow';
import "./topBrands.css";

const topBrandsList = [
    {
        id: 1,
        time: "37 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/2aa77cff41af7cdb4ec59574d238f78e_1575883799.png"
    },
    {
        id: 2,
        time: "54 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617188142.png"
    },
    {
        id: 3,
        time: "30 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/86d79de8394874f77218aacc17db3245_1521806382.png"
    },
    {
        id: 4,
        time: "41 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/c38f7540bcc5a38e918856ac06409056_1504531339.png"
    },
    {
        id: 5,
        time: "34 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/601f1135641a0a579d585ce86bcd0f01_1506081422.png"
    },
    {
        id: 6,
        time: "33 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/ddc5afe51006b94eab407815b125028c_1611268568.png"
    },
    {
        id: 7,
        time: "33 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/bd13f9119a336c32432c679ec6737a32_1609220205.png"
    },
    {
        id: 8,
        time: "46 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/600a6fd7f7d219da6ae759b6181127a3_1633121604.png"
    },
    {
        id: 9,
        time: "45 min",
        cover: "https://b.zmtcdn.com/data/brand_creatives/logos/a175a6938688350fb3da3018da6293db_1633121542.png"
    },


]
const settings = {
    
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <PrevArrow />,
    prevArrow: <NextArrow />
  };

function TopBrands(props) {
    return (
        <div className="top-brands max-width">
            <div className="collection-title">Top brands for you</div>
            <Slider {...settings}>
            {topBrandsList.map((brand) => {
                return <div>
                    <div className="top-brands-cover">
                        <img src={brand.cover} className="top-brands-image" alt={brand.time} />
                    </div>
                </div>
            })}
            </Slider>
            
        </div>
    );
}

export default TopBrands;