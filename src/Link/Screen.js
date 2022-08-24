
        import React from "react";
        // Import Swiper React components
        import { Swiper, SwiperSlide } from "swiper/react";
        
        // Import Swiper styles
        import "swiper/css";
        import "swiper/css/effect-cube";
        import "swiper/css/pagination";
        import d from '../Asset/d.jpg';
      
        
        
        import { EffectCube, Pagination } from "swiper";
        
        
        export const Screen = () => {
            return (
        
              <section id="service">
              <div id="skill" className="px-4  py-10 mx-auto md:max-w-full  md:px-12 lg:px-8 lg:py-10">
        <div className=" justify-center items-center">
          <p className="text-center text-[4vh] text-white p-5 font-fredericka">Clients Reviews</p>
        <div className="lg:h-72 lg:w-96 md:h-72 md:w-96 sm:h-72 sm:w-96 h-32 w-52 text-center">
        <>
              <Swiper
                 effect={"cube"}
                 grabCursor={true}
                 cubeEffect={{
                   shadow: true,
                   slideShadows: true,
                   shadowOffset: 20,
                   shadowScale: 0.94,
                 }}
                 pagination={true}
                 modules={[EffectCube, Pagination]}
                 className="mySwiper"
              >
                <SwiperSlide>
          <img src={d} alt=""/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={d} alt="" />
        </SwiperSlide>
              </Swiper>
            </>
        </div>
        </div>
        
              </div>
              </section>
            );
          };
          
          export default Screen;