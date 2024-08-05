'use client'
import React from 'react';
import Slider from './Slider';

const Paquete = () => {

    return (
        <section id='profesionales' className=''>
            <div className="max-w-[960px] mx-auto">
                <h2 className=' text-secondary text-center py-20 text-2xl md:text-3xl lg:text-6xl'>Nuestros profesionales</h2>                
                <Slider />
            </div>
        </section>
    );
}

export default Paquete;
