import { Carousel } from "react-responsive-carousel";
import CarouselItem from "./CarouselItem";

const HeroSection = () => {
  return (
    <section className="dtr-section dtr-section-with-bg dtr-hero-section-top-padding bg-blue">
      <div className="dtr-bottom-shape-img">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <h1 className="color-white">
                We are here
                <br />
                for the Choice of Assignment
              </h1>
              <p className="color-white-muted">
                Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do
                eiusmod tempor incididunt soluta nobis assumenda labore quod
                maxime dolore magna aliqua.
              </p>
              <a
                href="#contact"
                className="dtr-btn btn-red dtr-scroll-link dtr-mt-30 dtr-mr-40"
              >
                Book Now
              </a>
              {/* <a
                className="dtr-video-popup dtr-text-btn dtr-btn-left-icon dtr-mt-30 color-red vbox-item"
                data-autoplay="true"
                data-vbtype="video"
                href="https://www.youtube.com/watch?v=kuceVNBTJio"
              >
                <i className="icon-play"></i> Watch The Video
              </a> */}
            </div>

            <div className="col-12 col-md-6 small-device-space">
              <img
                src="images/hero-img1.jpg"
                alt="image"
                className="dtr-rounded-img dtr-mb-minus50"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
