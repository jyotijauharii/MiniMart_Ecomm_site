import Rating from "@mui/material/Rating";
// import Button from "@mui/material/Rating";
import { AiOutlineFullscreen } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";

import Slider from 'react-slick';
import Button from "@mui/material/Button";


const ProductItem = () => {
  var productSliderOptions = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,

  };
  return (
    <>

      <Slider {...productSliderOptions}>
        <div className="item productItem">
               <div className ="imgWrapper">
          <img src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS8M-seVWubjvEC7sF4f5BB9JgrbfxjF4gofcOo8TBjmpuo03qEaBXQrxxJdKNGyr___OSt4x12nltjqiDnXiGjvSmP_P-ayUaYFQ05L70" className="w-100"></img>
          <span className="badge badge-primary">28%</span>
          <div className ="actions">
           <Button><AiOutlineFullscreen /></Button> 
          <Button>< AiOutlineHeart/></Button>
          </div>
          </div>
          <h3>Men Fashion</h3>
          <span className="text-success d-block">In Stock</span>
          <Rating className="mt-2 mb-2" name="read-only" value={4} readOnly size="small" precision={0.5}></Rating>

          <div className="d-flex">
            <span className="oldPrice">$20</span>
            <span className="netPrice text-danger">$15</span>
          </div>
          <div className ="cartButton">
            <Button className = "btn">View More</Button>
          </div>
        </div>
        <div className="item productItem">
          <div className ="imgWrapper">
          <img src="https://cdn.pixabay.com/photo/2022/12/04/07/03/woman-7633843_1280.jpg" className="w-100"></img>
          <span className="badge badge-primary">28%</span>
          <div className ="actions">
           <Button><AiOutlineFullscreen /></Button> 
          <Button>< AiOutlineHeart/></Button>
          </div>
          </div>
          <h3>Women Fashion</h3>
          <span className="text-success d-block">In Stock</span>
          <Rating className="mt-2 mb-2" name="read-only" value={4} readOnly size="small" precision={0.5}></Rating>

          <div className="d-flex">
            <span className="oldPrice">$20</span>
            <span className="netPrice text-danger">$15</span>
          </div>
           <div className ="cartButton">
            <Button className = "btn">View More</Button>
          </div>
        </div>
        <div className="item productItem">
               <div className ="imgWrapper">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCswuIqOS9RCe3tv5QsfyH2PLF7MFWJJHczqul0JnYJ0-DUoofC9Rak21nIOAftuLW2ro&usqp=CAU" className="w-100"></img>
          <p className="badge badge-primary">28%</p>
          <div className ="actions">
           <Button><AiOutlineFullscreen /></Button> 
          <Button>< AiOutlineHeart/></Button>
          </div>
          </div>
          <h3>Kid Fashion</h3>
          <span className="text-success d-block">In Stock</span>
          <Rating className="mt-2 mb-2" name="read-only" value={4} readOnly size="small" precision={0.5}></Rating>

          <div className="d-flex">
            <span className="oldPrice">$20</span>
            <span className="netPrice text-danger">$15</span>
          </div>
           <div className ="cartButton">
            <Button className = "btn">View More</Button>
          </div>
        </div>
        <div className="item productItem">
               <div className ="imgWrapper">
          <img src="https://images.meesho.com/images/products/497331518/o3xmc_1200.jpg?width=512" className="w-100"></img>
          <p className="badge badge-primary">28%</p>
          <div className ="actions">
           <Button><AiOutlineFullscreen /></Button> 
          <Button>< AiOutlineHeart/></Button>
          </div>
          </div>
          <h3>Baby Girl Fashion</h3>
          <span className="text-success d-block">In Stock</span>
          <Rating className="mt-2 mb-2" name="read-only" value={4} readOnly size="small" precision={0.5}></Rating>

          <div className="d-flex">
            <span className="oldPrice">$20</span>
            <span className="netPrice text-danger">$15</span>
          </div>
           <div className ="cartButton">
            <Button className = "btn">View More</Button>
          </div>
        </div>
      </Slider>

        <Slider {...productSliderOptions}>
        <div className="item productItem">
               <div className ="imgWrapper">
          <img src="https://saudewala.in/cdn/shop/collections/Laptop.jpg?v=1732216115&width=1296" className="w-100"></img>
          <span className="badge badge-primary">28%</span>
          <div className ="actions">
           <Button><AiOutlineFullscreen /></Button> 
          <Button>< AiOutlineHeart/></Button>
          </div>
          </div>
          <h3>Laptop</h3>
          <span className="text-success d-block">In Stock</span>
          <Rating className="mt-2 mb-2" name="read-only" value={4} readOnly size="small" precision={0.5}></Rating>

          <div className="d-flex">
            <span className="oldPrice">$20</span>
            <span className="netPrice text-danger">$15</span>
          </div>
          <div className ="cartButton">
            <Button className = "btn">View More</Button>
          </div>
        </div>
        <div className="item productItem">
          <div className ="imgWrapper">
          <img src="https://images-na.ssl-images-amazon.com/images/I/81pieXC63IL.jpg" className="w-100"></img>
          <span className="badge badge-primary">28%</span>
          <div className ="actions">
           <Button><AiOutlineFullscreen /></Button> 
          <Button>< AiOutlineHeart/></Button>
          </div>
          </div>
          <h3>TV</h3>
          <span className="text-success d-block">In Stock</span>
          <Rating className="mt-2 mb-2" name="read-only" value={4} readOnly size="small" precision={0.5}></Rating>

          <div className="d-flex">
            <span className="oldPrice">$20</span>
            <span className="netPrice text-danger">$15</span>
          </div>
           <div className ="cartButton">
            <Button className = "btn">View More</Button>
          </div>
        </div>
        <div className="item productItem">
               <div className ="imgWrapper">
          <img src="https://m.media-amazon.com/images/I/51LOop+yr9L.jpg" className="w-100"></img>
          <p className="badge badge-primary">28%</p>
          <div className ="actions">
           <Button><AiOutlineFullscreen /></Button> 
          <Button>< AiOutlineHeart/></Button>
          </div>
          </div>
          <h3> Kitchen Chimney</h3>
          <span className="text-success d-block">In Stock</span>
          <Rating className="mt-2 mb-2" name="read-only" value={4} readOnly size="small" precision={0.5}></Rating>

          <div className="d-flex">
            <span className="oldPrice">$20</span>
            <span className="netPrice text-danger">$15</span>
          </div>
           <div className ="cartButton">
            <Button className = "btn">View More</Button>
          </div>
        </div>
        <div className="item productItem">
               <div className ="imgWrapper">
          <img src="https://m.media-amazon.com/images/I/51IHj-OGXKL.jpg" className="w-100"></img>
          <p className="badge badge-primary">28%</p>
          <div className ="actions">
           <Button><AiOutlineFullscreen /></Button> 
          <Button>< AiOutlineHeart/></Button>
          </div>
          </div>
          <h3>Bathroom Geyser</h3>
          <span className="text-success d-block">In Stock</span>
          <Rating className="mt-2 mb-2" name="read-only" value={4} readOnly size="small" precision={0.5}></Rating>

          <div className="d-flex">
            <span className="oldPrice">$20</span>
            <span className="netPrice text-danger">$15</span>
          </div>
           <div className ="cartButton">
            <Button className = "btn">View More</Button>
          </div>
        </div>
      </Slider>
      {/* <div className="item productItem">
        <img src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg" className="w-100"></img>
        <p className="badge badge-primary">28%</p>
        <div className="action">
          <Button className="actionButton"><AiOutlineFullscreen /></Button>
        </div>
        <h3>Laptop</h3>
        <span className="text-success d-block">In Stock</span>
        <Rating className="mt-2 mb-2" name="read-only" value={4} readOnly size="small" precision={0.5}></Rating>

        <div className="d-flex">
          <span className="oldPrice">$20</span>
          <span className="netPrice text-danger">$15</span>
        </div>
      </div>
      <div className="item productItem">
        <img src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg" className="w-100"></img>
        <p className="badge badge-primary">28%</p>
        <h3>Mobile</h3>
        <span className="text-success d-block">In Stock</span>
        <Rating className="mt-2 mb-2" name="read-only" value={4} readOnly size="small" precision={0.5}></Rating>

        <div className="d-flex">
          <span className="oldPrice">$20</span>
          <span className="netPrice text-danger">$15</span>
        </div>
      </div>
      <div className="item productItem">
        <img src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg" className="w-100"></img>
        <p className="badge badge-primary">28%</p>
        <div className="info">
          <h3>TV</h3>
          <span className="text-success d-block">In Stock</span>
          <Rating className="mt-2 mb-2" name="read-only" value={4} readOnly size="small" precision={0.5}></Rating>

          <div className="d-flex">
            <span className="oldPrice">$20</span>
            <span className="netPrice text-danger">$15</span>
          </div>
        </div>
      </div> */}



    </>
  )
}

export default ProductItem;