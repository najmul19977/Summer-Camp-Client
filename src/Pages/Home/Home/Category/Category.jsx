import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import slide1 from '../../../../assets/image-ex/ex1.jpg';
import slide2 from '../../../../assets/image-ex/ex2.jpg';
import slide3 from '../../../../assets/image-ex/ex3.jpg';
import slide4 from '../../../../assets/image-ex/ex4.jpg';
import slide5 from '../../../../assets/image-ex/ex5.jpg';

const Category = () => {
    return (
        <Swiper
            slidesPerView={4}
            spaceBetween={30}
            centeredSlides={true}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper mb-20 mt-10"
        >
            <SwiperSlide>
                <img src={slide1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={slide2} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={slide3} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={slide4} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={slide5} alt="" />
            </SwiperSlide>
            
        </Swiper>
    );
};

export default Category;