import React from 'react';

const SliderCard = ({ children, imgSrc, ...props }) => {
    return (
        <div {...props} className='w-full my-4 shadow-xl'>
            <img className=' object-cover  w-full'
                src={imgSrc}
                alt='card'
             />
             <div className=''>
                <div className='p-4 text-[#fff]'>{children}</div>
             </div>
        </div>
    );
}

export default SliderCard;
