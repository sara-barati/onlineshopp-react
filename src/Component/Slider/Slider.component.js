import React, {useRef, useState} from "react";
// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
// import "./slider.scss";
import {FreeMode, Navigation, Thumbs} from "swiper";
// import styles from "./Slider.module.scss";


export function Slider(images) {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    // console.log(props.length)
    return (
        <>
            <Swiper
                // style={{
                //     "--swiper-navigation-color": "#fff",
                //     "--swiper-pagination-color": "#fff",
                // }}
                loop={true}
                spaceBetween={10}
                navigation={true}
                thumbs={{swiper: thumbsSwiper}}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2"
            >

                {images?.map(image => {
                    return (
                        <SwiperSlide key={image}>
                            <img src={`http://localhost:3002/files/${image}`} alt=""/>
                        </SwiperSlide>
                    )
                })}

            </Swiper>

            <Swiper
                onSwiper={setThumbsSwiper}
                loop={true}
                spaceBetween={10}
                slidesPerView={images?.length}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper"
            >
                {images?.map(image => {

                    return (
                        <SwiperSlide key={image}>
                            <img src={`http://localhost:3002/files/${image}`} alt=""/>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </>
    );
}  