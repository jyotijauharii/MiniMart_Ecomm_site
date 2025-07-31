import HomeBanner from "../../Components/HomeBanner";
import Banner2 from "../../assets/photo/Banner2.jpg"
import Banner3 from "../../assets/photo/Banner3.jpg"
import Banner4 from "../../assets/photo/Banner4.webp"
import Banner5 from "../../assets/photo/Banner5.png"
import Banner6 from "../../assets/photo/Banner6.png"
import Button from "@mui/material/Button";
import { IoMdArrowForward } from "react-icons/io";
import ProductItem from "../../Components/ProductItem";
import HomeCat from "../../Components/HomeCat";
// import HomeCat from "./src/Components/HomeCat/index.js"
// import { AiOutlineFullscreen } from "react-icons/ai";
// import React from "react";
// import Slider from 'react-slick';
// import Rating from "@mui/material/Rating";



const Home = () => {

    return (
        <>
            <HomeBanner />
            <HomeCat />
            <section className="homeProduct">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="banner1">
                                <img src={Banner2} className="cursor w-100"></img>
                            </div>
                            <div className="banner mt-3">
                                <img src={Banner3} className="cursor w-100"></img>
                            </div>
                        </div>
                        <div className="col-md-9">
                            <div className="d-flex align-items-center">
                                <div className="info w-75">
                                    <h3>Best Seller</h3>
                                    <p className="text"> Do not miss the current offers untill the end of the month.</p>
                                </div>
                                <Button className="viewAllBtn">View All<IoMdArrowForward /></Button>
                            </div>
                            <div className="product_row w-100">
                                <ProductItem />

                            </div>

                        </div>

                    </div>
                </div>
                <div className="banner4">
                    <img src={Banner4} className="Banner_cursor"></img>
                </div>
                <div className="banner5">
                    <img src={Banner5} className="Banner_cursor "></img>
                </div>
                <div className="banner6">
                    <img src={Banner6} className="Banner_cursor "></img>
                </div>

            </section>

        </>
    )
}

export default Home;



