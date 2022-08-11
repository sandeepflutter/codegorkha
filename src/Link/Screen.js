
        import React from "react";
        // Import Swiper React components
        import { Swiper, SwiperSlide } from "swiper/react";
        
        // Import Swiper styles
        import "swiper/css";
        import "swiper/css/effect-cube";
        import "swiper/css/pagination";
        
        
        
        import { EffectCube } from "swiper";
        
        
        export const Screen = () => {
            return (
        
              <section id="service" class="text-gray-400 body-font bg-gray-900 pb-10">
              <div id="skill" className="px-4  py-10 mx-auto md:max-w-full  md:px-12 lg:px-8 lg:py-10">
             <p className="ext-center font-bold text-3xl"> Website</p>
        <div className="flex justify-center items-center">
        <div className="h-72 w-96 text-center">
        <>
              <Swiper
                effect={"cube"}
                grabCursor={true}
                
                
                cubeEffect={{
                  shadow: true,
                  slideShadows: true,
                  shadowOffset: 20,
                  shadowScale: 0.94,
                  loop: true,
                  speed: 3000,
                  autoplay: { delay: 0.01 , disableOnInteraction: false, }
                }}
        
                    
                modules={[EffectCube]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-1.jpg" alt=""/>
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-2.jpg" alt=""/>
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-3.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="https://swiperjs.com/demos/images/nature-2.jpg" alt=""/>
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