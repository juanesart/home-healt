'use client'
import React from 'react';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import SliderCard from './SliderCard';

const Slider = () => {

    const [isopen, setIsopen] = useState(false)
    const [caso, setCaso] = useState(0)


    const handleClick1 = () => {
        setIsopen(true)
        setCaso(1)
    }
    const handleClick2 = () => {
        setIsopen(true)
        setCaso(2)
    }
    const handleClick3 = () => {
        setIsopen(true)
        setCaso(3)
    }

    switch (caso) {
        case 1:
            var caso1 = isopen
            var caso2 = !isopen
            var caso3 = !isopen
            break;
        case 2:
            var caso1 = !isopen
            var caso2 = isopen
            var caso3 = !isopen
            break;
        case 3:
            var caso1 = !isopen
            var caso2 = !isopen
            var caso3 = isopen
        default:
            break;
    }

    return (
        <div className="">
            <div className="flex items-center justify-between text-xl py-10">
                <button onClick={handleClick1} className='rounded-lg bg-white p-4 font-semibold text-primary items-center hover:bg-primary focus:bg-primary focus:text-white hover:text-white transition-all duration-300'>Médicos generales</button>
                <button onClick={handleClick2} className='rounded-lg bg-white p-4 font-semibold text-primary items-center hover:bg-primary focus:bg-primary focus:text-white hover:text-white transition-all duration-300'>Enfermeras profesionales</button>
                <button onClick={handleClick3} className='rounded-lg bg-white p-4 font-semibold text-primary items-center hover:bg-primary focus:bg-primary focus:text-white hover:text-white transition-all duration-300'>Auxiliares de enfermería</button>
            </div>
            <div className={caso1 ? " bg-hoverPri rounded-3xl  transition-all  duration-500 max-w-[600px] mx-auto  min-h-[50vh]" : "hidden"}>
                <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                    spaceBetween={50}
                    autoplay={{
                        delay: 2500,
                        pauseOnMouseEnter: true
                    }}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                >
                    <SwiperSlide>
                        <div className=" flex w-full">
                            <SliderCard imgSrc={'/images/avatarM.png'}>
                                <h2 className=' text-white text-center font-bold text-2xl md:text-2xl lg:text-3xl mb-6'>Julian pulgarin
                                </h2>
                            </SliderCard>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=" flex w-full">
                            <SliderCard imgSrc={'/images/avatarM.png'}>
                                <h2 className=' text-white text-center font-bold text-2xl md:text-2xl lg:text-3xl mb-6'>Jose David Correa
                                </h2>
                            </SliderCard>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=" flex w-full">
                            <SliderCard imgSrc={'/images/avatarF.png'}>
                                <h2 className=' text-white text-center font-bold text-2xl md:text-2xl lg:text-3xl mb-6'>Laura arenas
                                </h2>
                            </SliderCard>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=" flex w-full">
                            <SliderCard imgSrc={'/images/avatarM.png'}>
                                <h2 className=' text-white text-center font-bold text-2xl md:text-2xl lg:text-3xl mb-6'>Luis Giraldo
                                </h2>
                            </SliderCard>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=" flex w-full">
                            <SliderCard imgSrc={'/images/avatarF.png'}>
                                <h2 className=' text-white text-center font-bold text-2xl md:text-2xl lg:text-3xl mb-6'>Nathaly Sampedro
                                </h2>
                            </SliderCard>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=" flex w-full">
                            <SliderCard imgSrc={'/images/avatarF.png'}>
                                <h2 className=' text-white text-center font-bold text-2xl md:text-2xl lg:text-3xl mb-6'>Pamela Pérez
                                </h2>
                            </SliderCard>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=" flex w-full">
                            <SliderCard imgSrc={'/images/avatarF.png'}>
                                <h2 className=' text-white text-center font-bold text-2xl md:text-2xl lg:text-3xl mb-6'>Laura Mosquera
                                </h2>
                            </SliderCard>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className={caso2 ? " bg-hoverPri rounded-3xl  transition-all  duration-500 max-w-[600px] mx-auto  min-h-[50vh]" : "hidden"}>
                <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                    spaceBetween={50}
                    autoplay={{
                        delay: 2500,
                        pauseOnMouseEnter: true
                    }}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                >
                    <SwiperSlide>
                        <div className=" flex w-full">
                            <SliderCard imgSrc={'/images/avatarF.png'}>
                                <h2 className=' text-white text-center font-bold text-2xl md:text-2xl lg:text-3xl mb-6'>Diana Paola Montoya
                                </h2>
                            </SliderCard>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=" flex w-full">
                            <SliderCard imgSrc={'/images/avatarF.png'}>
                                <h2 className=' text-white text-center font-bold text-2xl md:text-2xl lg:text-3xl mb-6'>Leidy Flórez
                                </h2>
                            </SliderCard>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=" flex w-full">
                            <SliderCard imgSrc={'/images/avatarF.png'}>
                                <h2 className=' text-white text-center font-bold text-2xl md:text-2xl lg:text-3xl mb-6'>Ana María Gómez
                                </h2>
                            </SliderCard>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className={caso3 ? " bg-hoverPri rounded-3xl  transition-all  duration-500 max-w-[600px] mx-auto  min-h-[50vh]" : "hidden"}>
                <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                    spaceBetween={50}
                    autoplay={{
                        delay: 2500,
                        pauseOnMouseEnter: true
                    }}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                >
                    <SwiperSlide>
                        <div className=" flex w-full">
                            <SliderCard imgSrc={'/images/avatarF.png'}>
                                <h2 className=' text-white text-center font-bold text-2xl md:text-2xl lg:text-3xl mb-6'>Luz Dery Bran
                                </h2>
                            </SliderCard>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=" flex w-full">
                            <SliderCard imgSrc={'/images/avatarM.png'}>
                                <h2 className=' text-white text-center font-bold text-2xl md:text-2xl lg:text-3xl mb-6'>Pablo Ramírez
                                </h2>
                            </SliderCard>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=" flex w-full">
                            <SliderCard imgSrc={'/images/avatarM.png'}>
                                <h2 className=' text-white text-center font-bold text-2xl md:text-2xl lg:text-3xl mb-6'>David Posada
                                </h2>
                            </SliderCard>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>

    );
}

export default Slider;
