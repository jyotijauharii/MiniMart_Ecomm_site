import Button from "@mui/material/Button";
import { ImMenu3 } from "react-icons/im";
import { Link } from "react-router-dom";


const Navigation = () => {
    return (
        <nav>
            <div className="container">
                <div classname="row">
                    <div classname="col-sm-3 nav-part-1">
                        <Button className="allCatTab align-item-center">
                            <span className="icon1 mr-2"><ImMenu3 /></span>
                            <span class="text">All Categories</span>
                    
                    <div className="col-sm-9 nav-part-2 d-flex align-item-center">
                        <ul className="list list-inline ml-auto">
                            <li classname="list-inline-item"><Link to="/">Home</Link></li>
                            <li classname="list-inline-item"><Link to="/">Bakery</Link></li>
                            <li classname="list-inline-item"><Link to="/">Grocery</Link></li>
                            <li classname="list-inline-item"><Link to="/">Fashion</Link></li>
                            <li classname="list-inline-item"><Link to="/">Electronic</Link></li>
                            <li classname="list-inline-item"><Link to="/">About us</Link></li>
                        </ul>
                    </div>
    </Button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navigation;

                            
