
        import React from "react";
        // Import Swiper React components
        import { Swiper, SwiperSlide } from "swiper/react";
        
        // Import Swiper styles
        import "swiper/css";
        import "swiper/css/effect-cube";
        import "swiper/css/pagination";
        import d from '../Asset/d.jpg';
        
        
        import { EffectCube } from "swiper";
        
        
        export const Screen = () => {
            return (
        
              <section id="service">
              <div id="skill" className="px-4  py-10 mx-auto md:max-w-full  md:px-12 lg:px-8 lg:py-10">
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
                }}
        
                    
                modules={[EffectCube]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <img src={d} alt=""/>
                </SwiperSlide>
                <SwiperSlide>
                  <img src={d} alt=""/>
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