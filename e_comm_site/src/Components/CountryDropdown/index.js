import Button from "@mui/material/Button";
import { FaAngleDown } from "react-icons/fa6";
import Dialog from "@mui/material/Dialog"
import { BsSearchHeart } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

const CountryDropdown = () => {
    const[isOpenModal, setisOpenModal] = useState(false)


    return (
        <>  
            <Button className="countryDrop" onClick ={()=> setisOpenModal(true)}>
                <div className=" info d-flex flex-column">
                    <span className="label">Your Location</span>
                    <span className=" name">India</span>
                    <span className="ml-auto"><FaAngleDown /></span>
                </div>
            </Button>



            <Dialog open={isOpenModal} onClose={()=>setisOpenModal(false)} className="locationModal" >
                <h4>Choose Your Location...</h4>
                <p>Choose your current location for delivery</p>
                <Button className ="close" onClick ={()=> setisOpenModal(false)}><IoMdClose /></Button>

                <div className="headerSearch w-100">
                    <input type="text" placeholder="Search your area"></input>
                    <Button><BsSearchHeart /></Button>
                </div>
                <ul className="countryList">
                    <li><Button onClick ={()=> setisOpenModal(false)} >Delhi</Button></li>
                    <li><Button onClick ={()=> setisOpenModal(false)} >Mumbai</Button></li>
                    <li><Button onClick ={()=> setisOpenModal(false)} >Goa</Button></li>
                    <li><Button onClick ={()=> setisOpenModal(false)} >Kolkatta</Button></li>
                    <li><Button onClick ={()=> setisOpenModal(false)} >Chapra</Button></li>
                    <li><Button onClick ={()=> setisOpenModal(false)} >Sasaram</Button></li>
                    <li><Button onClick ={()=> setisOpenModal(false)} >Patna</Button></li>
                    <li><Button onClick ={()=> setisOpenModal(false)} >Odisha</Button></li>
                    <li><Button onClick ={()=> setisOpenModal(false)} >Punjab</Button></li>
                    <li><Button onClick ={()=> setisOpenModal(false)} >Lacknow</Button></li>
                    <li><Button onClick ={()=> setisOpenModal(false)} >Dehri </Button></li>
                    <li><Button onClick ={()=> setisOpenModal(false)} >Lacknow</Button></li>
                    <li><Button onClick ={()=> setisOpenModal(false)} >Lacknow</Button></li>
                    <li><Button onClick ={()=> setisOpenModal(false)} >Lacknow</Button></li>
                    <li><Button onClick ={()=> setisOpenModal(false)} >Lacknow</Button></li>
                    <li><Button onClick ={()=> setisOpenModal(false)} >Lacknow</Button></li>
                    <li><Button onClick ={()=> setisOpenModal(false)} >Lacknow</Button></li>
                    <li><Button onClick ={()=> setisOpenModal(false)} >Lacknow</Button></li>
                </ul>
                </Dialog>





        </>
    )
}

export default CountryDropdown;





