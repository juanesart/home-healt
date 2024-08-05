import React from 'react';
import Image from 'next/image';

const Extra = () => {
    return (
        <div id='extra'>
            <div className="max-w-[960px] mx-auto">
                <div className="grid gap-4 py-20 items-center md:grid-cols-5">
                    <div className=" md:col-span-3">
                        <p className='lg:text-3xl text-2xl'>Como nos importa tu comodidad, tenemos algunas alianzas estratégicas por el momento; te las presentamos a continuación:</p>
                        <ul className='text-2xl py-4 text- list-inside list-disc pl-4 text-secondary'>
                            <li>Laboratorio clínico (prestan su servicio 24/7 y a domicilio)</li>
                            <li>Médico especialista en Urología (presta su servicio en consultorio)</li>
                            <li>Médico especialista en Pediatría (presta su servicio en consultorio)</li>
                            <li>Médico especialista en Ginecología y obstetricia (presta su servicio en consultorio)</li>
                            <li>Médico especialista en Neurología</li>
                        </ul>
                        <p className='lg:text-3xl text-2xl'>Esperamos que sean muchas más próximamente!</p>
                    </div>
                    <div className=" col-span-2">
                    <Image
                            src='/images/logoPrinc.png'
                            alt='logo'
                            width={800}
                            height={500}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Extra;
