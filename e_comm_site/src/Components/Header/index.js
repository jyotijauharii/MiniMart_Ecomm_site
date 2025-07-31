import logo from "../../assets/photo/logo.png"
import { Link } from "react-router-dom"
import { BsSearchHeart } from "react-icons/bs";
import CountryDropdown from "../CountryDropdown";
import SearchBox from "../Header/SearchBox";
import Button from "@mui/material/Button";
import { FaUser } from "react-icons/fa6";
import { IoBagHandle } from "react-icons/io5";
import Navigation from "./Navigation";



const Header = () => {
    return (
        <>
            <div className="HeaderWrapper">
                <div className="top-strip bg-yellow">
                    <div className="container">
                        <p className="mb-0 mt-0 text-center ">Due to operation <b>SINDOOR</b>, order may be processed with a slight delay!</p>

                    </div>
                </div>
            </div>

            <header className="header">
                <div className="container">
                    <div className="row">
                        <div className="logoWrapper d-flex align-items-center col-sm-2">
                            <Link to={"/"}> <img src={logo} alt="logo" /> </Link>

                        </div>

                        <div className=" col-sm-10 d-flex align-items-center part-2 ">
                            <CountryDropdown />
                            <SearchBox />

                            <div className=" d-flex align-items-center part-3  ml-auto">
                                <Button className="user mr-4"> <FaUser /></Button>
                                <div className="ml-auto cartTab d-flex align-item center">
                                    <span className="price">$2.33</span>
                                    <div className="position-relative ml-4">
                                        <Button className='user'> <IoBagHandle /></Button>
                                        <span className="count d-flex align-item center justify-content-center">1 </span>
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
           <Navigation/>
         
        </>
    )
}

export default Header;
           







