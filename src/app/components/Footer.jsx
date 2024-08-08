import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineMail, AiOutlineInstagram, AiOutlineFacebook, AiOutlineTikTok, AiOutlineCopyrightCircle } from 'react-icons/ai'

const Footer = () => {
    return (
        <div id='footer' className='bg-primary z-50'>
            <div className="max-w-[960px] p-8 flex md:flex-row items-center flex-col md:items-end justify-between mx-auto text-white">
                <div className="">
                    <Image
                        src='/images/logoBlanco.png'
                        alt="logo"
                        width={90}
                        height={120}
                    />
                </div>
                <div className="">
                    <ul className='flex flex-col items-center text-center'>
                        <li className='hover:text-[#EB2877] duration-300'>
                            <Link
                                href='https://www.instagram.com/homehealth.med/'
                                target='_blank'
                            >
                                <p className='flex font-medium items-center gap-1'>
                                    <AiOutlineInstagram />
                                    homehealth.med
                                </p>
                            </Link>
                        </li>
                        <li className='hover:text-black duration-300'>
                            <Link
                                href='https://www.tiktok.com/@homehealth.med'
                                target='_blank'
                            >
                                <p className='flex font-medium items-center gap-1'>
                                    <AiOutlineTikTok />
                                    homehealth.med
                                </p>
                            </Link>
                        </li>
                        <li>
                            <p className='flex font-medium items-center gap-1'>
                                <AiOutlineMail />
                                homehealth.med2315@gmail.com
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Footer;
