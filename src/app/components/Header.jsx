'use client'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
    return (
        <section id='header' className=' bg-primary shadow-lg fixed z-40 top-0 w-full'>
            <div className=" max-w-[960px] text-white mx-auto">
                <div className=" flex items-center justify-center md:justify-between">
                    <div className="w-0 sm:w-full">
                        <Link href={'#'}>
                            <Image
                                src='/images/LogoH.jpg'
                                alt='logo'
                                width={270}
                                height={100}
                             />
                        </Link>
                    </div>
                    <ul className='flex p-2 md:font-semibold md:text-xl items-center gap-6 justify-between'>
                        <li className='hover:text-hoverSec duration-300'>
                            <Link href={'#about'}>
                                Nosotros
                            </Link>
                        </li>
                        <li className='hover:text-hoverSec duration-300'>
                            <Link href={'#services'}>
                                servicios
                            </Link>
                        </li>
                        <li className='hover:text-hoverSec duration-300'>
                            <Link href={'#profesionales'}>
                                profesionales
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Header;
