import React from 'react';
import Slider from 'react-slick';
import NextArrow from '../../common/carousel/nextArrow';
import PrevArrow from '../../common/carousel/prevArrow';
import "./deliveryCollections.css";
import DeliveryItem from './deliveryItem';

const deliveryItems = [
    {
        id: 1,
        title: "Pizza",
        cover: "https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png",
    },
    {
        id: 2,
        title: "Chaat",
        cover: "https://b.zmtcdn.com/data/dish_images/1437bc204cb5c892cb22d78b4347f4651634827140.png",
    },
    {
        id: 3,
        title: "Burger",
        cover: "https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png",
    },
    {
        id: 4,
        title: "Sandwich",
        cover: "https://b.zmtcdn.com/data/o2_assets/fc641efbb73b10484257f295ef0b9b981634401116.png",
    },
    {
        id: 5,
        title: "Momos",
        cover: "https://b.zmtcdn.com/data/o2_assets/5dbdb72a48cf3192830232f6853735301632716604.png",
    },
    {
        id: 6,
        title: "Cake",
        cover: "https://b.zmtcdn.com/data/dish_images/d5ab931c8c239271de45e1c159af94311634805744.png",
    },
    {
        id: 7,
        title: "Chiken",
        cover: "https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png",
    },
    {
        id: 8,
        title: "Rolls",
        cover: "https://b.zmtcdn.com/data/dish_images/c2f22c42f7ba90d81440a88449f4e5891634806087.png",
    },
    {
        id: 9,
        title: "Fries",
        cover: "https://b.zmtcdn.com/data/o2_assets/13bdf0d4c96d44e6ddb21fedde0fe4081632716661.png",
    },
    {
        id: 10,
        title: "Biryani",
        cover: "https://b.zmtcdn.com/data/dish_images/2a24c5264606bd78622267d28a3726821634805216.png",
    },
    {
        id: 11,
        title: "Noodles",
        cover: "https://b.zmtcdn.com/data/dish_images/91c554bcbbab049353a8808fc970e3b31615960315.png",
    },
]
const settings = {
    
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <PrevArrow />,
    prevArrow: <NextArrow />,
  };

function DeliveryCollections() {
    return (
        <div className="delivery-collections">
            <div className="max-width">
                <div className="collection-title">Eat what makes you happy</div>
                <Slider {...settings}>
                    {deliveryItems.map((item) => {
                        return <DeliveryItem item={item} />;
                    }
                    )}
                </Slider>

            </div>
            
        </div>
    );
}

export default DeliveryCollections;