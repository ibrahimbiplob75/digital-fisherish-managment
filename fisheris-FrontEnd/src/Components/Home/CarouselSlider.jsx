import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import slider1 from "../../assets/cover-1.jpg"
import slider2 from "../../assets/cover-1.jpg";
import slider3 from "../../assets/cover-3.png"
import slider4 from "../../assets/cover-4.png";
import slider5 from "../../assets/cover-5.png";
import slider6 from "../../assets/cover-6.jpg";

const CarouselSlider = () => {
  return (
    <Carousel >
      <div>
        <img src={slider1} />
      </div>
      <div>
        <img src={slider2} />
      </div>
      <div>
        <img src={slider3} />
      </div>
      <div>
        <img src={slider4} />
      </div>
      <div>
        <img src={slider5} />
      </div>
      <div>
        <img src={slider6} />
      </div>
    </Carousel>
  );
};

export default CarouselSlider;
