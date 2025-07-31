import Button from "@mui/material/Button";
import { ImMenu3 } from "react-icons/im";
import { Link } from "react-router-dom";
import HomeBanner from "../../HomeBanner";


const Navigation = () => {
    return (
        <nav>
            <div className="container">
                <div classname="row">
                    <div classname="col-sm-2 nav-part-1">
                        {/* <div className ="catWrapper"> */}
                        <Button className="allCatTab align-items-center">
                            <span className="icon1 mr-2"><ImMenu3 /></span>
                            <span class="text">All Categories</span>
                        </Button>
                        {/* <div className ="sidebarNav">
                            <ul>
                                    <li><Link to="/"><Button>oil</Button></Link></li>
                                    <li><Link to="/"><Button>Dairy</Button></Link></li>
                                   <li> <Link to="/"><Button>Grains</Button></Link></li>
                                    <li><Link to="/"><Button>Spices</Button></Link></li>
                                    <li><Link to="/"><Button>Snacks</Button></Link></li>
                                    <li><Link to="/"><Button>Fresh products</Button></Link></li>
                            </ul>
                        </div> */}

                        <div className="col-sm-10 nav-part-2 d-flex align-items-center">
                            <ul className="list list-inline ml-auto">
                                <li classname="list-inline-item"><Link to="/"> <Button> Home </Button></Link> </li>
                                <li classname="list-inline-item"><Link to="/"> <Button> Bakery </Button></Link>
                                    <div className="subMenu shadow">
                                        <Link to="/"><Button>Cake</Button></Link>
                                        <Link to="/"><Button>Pizza</Button></Link>
                                        <Link to="/"><Button>Burger</Button></Link>
                                    </div>
                                </li>
                                <li classname="list-inline-item"><Link to="/"> <Button> Grocery </Button></Link>
                                    <div className="subMenu shadow">
                                        <Link to="/"><Button>oil</Button></Link>
                                        <Link to="/"><Button>Dairy</Button></Link>
                                        <Link to="/"><Button>Grains</Button></Link>
                                        <Link to="/"><Button>Spices</Button></Link>
                                        <Link to="/"><Button>Snacks</Button></Link>
                                        <Link to="/"><Button>Fresh products</Button></Link>
                                    </div></li>
                                <li classname="list-inline-item"><Link to="/"> <Button> Fashion </Button></Link>
                                    <div className="subMenu shadow">
                                        <Link to="/"><Button>Men</Button></Link>
                                        <Link to="/"><Button>Kid</Button></Link>
                                        <Link to="/"><Button>Women</Button></Link>
                                    </div></li>
                                <li classname="list-inline-item"><Link to="/"> <Button> Electronic </Button></Link>
                                    <div className="subMenu shadow">
                                        <Link to="/"><Button>Home Decor</Button></Link>
                                        <Link to="/"><Button>Kitchen Appliance</Button></Link>
                                        <Link to="/"><Button>Bathroom Appliance</Button></Link>
                                    </div></li>
                                <li classname="list-inline-item"><Link to="/"> <Button> About us </Button></Link></li>

                            </ul>
                        </div>
                        <div><br/></div>

                    </div>
                </div>



            </div>
            {/* </div> */}
        </nav>
    )
}

export default Navigation;


