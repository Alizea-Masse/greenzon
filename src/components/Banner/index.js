import React from "react";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
  return (
    <div className="relative mt-6">
        <div className="absolute w-full h-7 bottom-0 z-20" />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
          <Image
            loading="lazy"
            src="/banner1.png"
            alt=""
            width={800}
            height={300}
            unoptimized={true}
          />
        </div>
        <div>
          <Image
            loading="lazy"
            src="/banner2.png"
            alt=""
            width={800}
            height={300}
            unoptimized={true}
          />
        </div>
        <div>
          <Image
            loading="lazy"
            src="/banner3.png"
            alt=""
            width={800}
            height={300}
            unoptimized={true}
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
