import React from"react";
import Slider from 'react-slick';
import Banner1 from "../../assets/photo/Banner1.png"


const HomeBanner =()=>{

    var settings ={
        dots:true,
        infinite:true,
        speed:500,
        slidesToShow:3,
        slidesToScroll:1,
        arrows:true
    };
    return(
      
        <div className = "homeBannerSection">
          <Slider {...settings}>
            <div className ="item">
               {/* <img src={Banner1} alt="Banner1" className= "w-100 imgg"/>  */}
                <img src ="https://thumbs.dreamstime.com/b/happy-european-woman-buying-food-shopping-local-supermarket-purchasing-groceries-products-walking-shop-cart-along-374057239.jpg" className ="w-100 imgg "/>
            </div>
            <div className ="item">
                <img src ="https://images.pexels.com/photos/205961/pexels-photo-205961.jpeg" className ="w-100 imgg"/>
            </div>
            <div className ="item">
                <img src ="https://images.pexels.com/photos/3962292/pexels-photo-3962292.jpeg" className ="w-100 imgg"/>
            </div>
            <div className ="item">
                <img src ="https://images.pexels.com/photos/135620/pexels-photo-135620.jpeg" className ="w-100 imgg"/>
            </div>
             <div className ="item">
                <img src ="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg" className ="w-100 imgg"/>
            </div>
          </Slider>
        </div>
      

    );
}

export default HomeBanner;