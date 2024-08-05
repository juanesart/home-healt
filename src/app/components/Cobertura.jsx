import React from 'react';
import Image from 'next/image';

const Cobertura = () => {
    return (
        <div id='cover'>
            <div className="max-w-[960px] mx-auto">
                <div className="py-20 items-center gap-4 grid md:grid-cols-5">
                    <div className="md:col-span-3 text-2xl lg:text-3xl text-secondary font-medium">
                        <p className='py-4'>Prestamos nuestros servicios en los municipios de La Estrella, Itagüí, Sabaneta, Envigado, Medellín y Bello.</p>
                        <p>Nuestro horario de atención para agendamiento de citas y procedimientos es de lunes a domingo, entre las 9 am y las 9 pm. Al contactarnos podremos verificar la disponibilidad para tu atención.</p>
                    </div>
                    <div className="md:col-span-2">
                        <Image
                            id='heroImage'
                            src='/images/ambulance.png'
                            alt='logo'
                            width={500}
                            height={500}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cobertura;
