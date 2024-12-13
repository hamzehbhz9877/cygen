import React, {useRef, useState} from 'react';
// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import './styles.scss';

// import required modules
import {FreeMode, Navigation, Thumbs} from 'swiper/modules';
import Image from "next/image";
import CustomButtons from "@/components/libarary/productDetails/swiper/customButtons";
import UseNextPrevSwiper from "@/hooks/swipper/useNextPrev";
import {FaRegImages} from "react-icons/fa";

export default function SwiperFiles({data,index,setIndex}: any) {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const {
        nextRef, prevRef,
        afterInit
    } = UseNextPrevSwiper();
    const swiper = React.useRef(null);

    const setSwiper = (newSwiper) => {
        swiper.current = newSwiper;
    };

    React.useEffect(()=>{
        if(swiper.current) {
            swiper.current.slideTo(index)
        }
    }, [index]);

    return (
        <>
            <Swiper
                onSwiper={setSwiper}
                spaceBetween={10}
                thumbs={{swiper: thumbsSwiper}}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2"
                onSlideChange={e=>setIndex(e.activeIndex)}
                watchSlidesProgress={true}
                onAfterInit={afterInit}
                updateOnWindowResize
                initialSlide={index}
                navigation={{prevEl: prevRef?.current, nextEl: nextRef?.current}}
            >
                {data.PictureModels.map((pic, index) => {
                    return <SwiperSlide key={index}>
                        <Image loading="lazy" width="700" height="700"
                               className="attachment-thumbnail size-thumbnail"
                               alt={pic.AlternateText}
                               title={pic.Title}
                               src={pic.FullSizeImageUrl}
                        />
                    </SwiperSlide>
                })}
                <div className="absolute inset-0 ">
                    <CustomButtons
                        nextRef={nextRef}
                        prevRef={prevRef}
                    />
                </div>
            </Swiper>

            <div
                className={"relative w-full py-4 z-2 flex justify-start items-center  duration-300 opacity-100"}>
                <Swiper
                    onSwiper={setThumbsSwiper}
                    spaceBetween={2}
                    slidesPerView={"auto"}
                    initialSlide={index}
                    watchSlidesProgress={true}
                    freeMode={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper"
                >
                            {data.PictureModels.map((pic, index) => {
                                return <SwiperSlide key={index}>
                                    <Image loading="lazy" width="70" height="70"
                                           className="attachment-thumbnail size-thumbnail"
                                           alt={pic.AlternateText}
                                           title={pic.Title}
                                           src={pic.FullSizeImageUrl}
                                    />
                                </SwiperSlide>
                            })}
                </Swiper>
            </div>

        </>
    );
}
