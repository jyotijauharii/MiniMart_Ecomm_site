//import React from "react";
import React from "react";
import Slider from 'react-slick';
// import {Swiper, SwiperSlide} from "Swiper/react";
// import 'Swiper/css';
// import 'Swiper/css/Navigation';
// import {Navigation} from 'Swiper/modules';



const HomeCat =()=>{

    var settings ={
        dots:true,
        infinite:true,
        speed:500,
        slidesToShow:10,
        slidesToScroll:1,
        arrows:true
    };
    return(
      
        <div className = "homeBannerSection">
                <h1 className ="homeCatH1"> Buy Fruits</h1>
          <Slider {...settings}>
         
            <div className ="item">
                <img src ="https://t4.ftcdn.net/jpg/05/98/81/85/240_F_598818528_GtDd2L8hW0VKiyAD7abaEw5xNaN6vOSc.jpg" className =" item_img"/>
                <h6>Red Apple</h6>
            </div>
            <div className ="item">
                <img src ="https://as2.ftcdn.net/v2/jpg/15/37/97/87/1000_F_1537978742_XPftVvzj2WuPjj6IEG0eja7Gm9jL7Uwy.jpg" className =" item_img"/>
                <h6>Red Apple</h6>
            </div>
            <div className ="item">
                <img src ="https://as2.ftcdn.net/v2/jpg/08/87/45/53/1000_F_887455339_zDNtR9NoTndw4V0shPLoqEfKCUskaMmb.jpg" className =" item_img"/>
                <h6>Red Apple</h6>
            </div>
            <div className ="item">
                <img src ="https://as2.ftcdn.net/v2/jpg/14/14/83/47/1000_F_1414834705_M0ZHbZiCUNzjthIxN4sOAg6Hb5eLUgNw.webp" className ="item_img"/>
                <h6>Red Apple</h6>
            </div>
             <div className ="item">
                <img src ="https://t4.ftcdn.net/jpg/06/04/39/87/240_F_604398787_qjKmpqF9pFWjvgFcXAiIFlAhYJOO3kUp.jpg" className =" item_img"/>
                <h6>Red Apple</h6>
            </div>
             <div className ="item">
                <img src ="https://as1.ftcdn.net/v2/jpg/12/30/23/58/1000_F_1230235800_4rVJsH97FBCCUSXCOelVfWaCZbkRgx2R.jpg" className =" item_img"/>
                <h6>Red Apple</h6>
            </div>
             <div className ="item">
                <img src ="https://as1.ftcdn.net/v2/jpg/08/61/50/10/1000_F_861501010_nrCiwa9E6WzvEQeqWfTgshH1mI0kcHD4.webp" className ="w-100 item_img"/>
                <h6>Red Apple</h6>
            </div>
             <div className ="item">
                <img src ="https://as2.ftcdn.net/v2/jpg/13/27/81/69/1000_F_1327816952_jbgKGd7vM62BgRQAoA3k1sbKEUKJLfvK.jpg" className ="w-100 item_img"/>
                <h6>Red Apple</h6>
            </div>
             <div className ="item">
                <img src ="https://as2.ftcdn.net/v2/jpg/11/46/01/07/1000_F_1146010710_aE48LPXyhN42pFDyhgQTVl93DX71yOGM.webp" className ="w-100 item_img"/>
                <h6>Red Apple</h6>
            </div>
             <div className ="item">
                <img src ="https://as2.ftcdn.net/v2/jpg/12/86/47/73/1000_F_1286477310_OWNca94zT4qbLRRfNYreeMCu7L0bVpk8.jpg" className ="w-100 item_img"/>
                <h6>Red Apple</h6>
            </div>
          
          </Slider>
        </div>
      

    );
}


export default HomeCat;