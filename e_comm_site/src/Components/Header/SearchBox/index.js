import Button from "@mui/material/Button";
import { BsSearchHeart } from "react-icons/bs";


const searchBox = () => {
   return (
      <div className="headerSearch ml-3 mr-3">
         <input type="text" placeholder="Search here....."></input>
         <Button><BsSearchHeart /></Button>

      </div>

   )
}

export default searchBox;

