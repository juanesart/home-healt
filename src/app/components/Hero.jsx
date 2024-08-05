'use client'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
    return (
        <div id='hero'>
            <div className="max-w-[960px] mx-auto">
                <div className='absolute -top-[100px] lg:right-[200px] right-7 -z-10'>
                    <Image
                        src='/images/decorGris.png'
                        alt='decorate'
                        width={300}
                        height={300}
                    />
                </div>
                <div className="grid py-20 md:grid-cols-5">
                    <div className=" col-span-3">
                        <Image
                            id='heroImage'
                            src='/images/imageHero.png'
                            alt='logo'
                            width={800}
                            height={500}
                        />
                    </div>
                    <div className="col-span-2 justify-center flex flex-col">
                        <h2 className='font-bold text-3xl md:text-5xl md:leading-[60px]'>
                            Tu salud, en casa y a un clic de distancia.
                        </h2>
                        <div className="my-8">
                            <Link
                                href='https://api.whatsapp.com/message/2ZAQWZRITTCCI1'
                                target='_blank'
                            >
                                <span className='bg-primary rounded-3xl p-4 text-white text-2xl font-semibold duration-300 hover:bg-hoverPri'>
                                    ¡Agendate ya!
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
