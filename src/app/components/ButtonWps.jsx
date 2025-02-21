import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const ButtonWps = () => {
    const handleClick = () => {
        gtag_report_conversion("https://wa.me/573001234567");
    };
    return (
        <div className='fixed right-0 bottom-0 z-10'>
            <Link
                onClick={handleClick}
                href='https://api.whatsapp.com/message/2ZAQWZRITTCCI1'
                target='_blank'
            >
                <Image
                    className='hover:scale-110 duration-300'
                    src='/images/whats.png'
                    alt="whatsapp"
                    width={80}
                    height={80}
                />
            </Link>
        </div>
    );
}

export default ButtonWps;
