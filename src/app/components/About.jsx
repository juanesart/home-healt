import React from 'react';
import Image from 'next/image';

const About = () => {
    return (
        <div id='about' className='bg-primary'>
            <div className="absolute opacity-20 lg:left-[200px] left-4">
                <Image
                    src='/images/logoFondo.png'
                    alt='decorate'
                    width={560}
                    height={600}
                />
            </div>
            <div className="max-w-[960px] min-h-[700px] items-center flex mx-auto">
                <div className="text-white text-xl py-20 md:text-3xl px-2 font-medium md:leading-[50px]">
                    Somos un grupo de profesionales en salud, que velamos por facilitar el acceso a los servicios de salud, y que tienen en cuenta las necesidades actuales de los pacientes, como lo son la comodidad, la tranquilidad, la agilidad en la atención y la valoración por personal capacitado y con experiencia, sin desplazamientos a centros de salud. Por eso, llevamos la valoración médica con atención de enfermería hasta la puerta de tu hogar.
                </div>
            </div>
        </div>
    );
}

export default About;
