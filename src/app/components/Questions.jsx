'use client'
import React from 'react';
import { useState } from 'react';

const Questions = () => {

    const [isopen1, setIsopen1] = useState(false);
    const [isopen2, setIsopen2] = useState(false);
    const [isopen3, setIsopen3] = useState(false);
    const [isopen4, setIsopen4] = useState(false);

    const handleClick1 = () => {
        setIsopen1(!isopen1)
    }
    const handleClick2 = () => {
        setIsopen2(!isopen2)
    }
    const handleClick3 = () => {
        setIsopen3(!isopen3)
    }
    const handleClick4 = () => {
        setIsopen4(!isopen4)
    }

    return (
        <div id='preguntas'>
            <div className="max-w-[960px] py-20 mx-auto">
                <div className=" transition-all duration-300">
                    <h2 className='text-secondary py-20 text-5xl text-center'>Preguntas Frecuentes</h2>
                    <div className="flex text-primary  gap-6 flex-col">
                        <button onClick={handleClick1} className='text-start p-4 hover:bg-hoverSec duration-300 border-solid border-[1px] border-hoverSec md:text-2xl text-xl'>¿Prestan servicios las 24 horas? </button>
                        <div className={isopen1 ? "p-4 duration-300 text-xl text-secondary" : "h-0 text-white collapse duration-300"}>
                            Nuestro horario de atención para consultas es de 9 am a 9 pm, sin embargo, si consideras que es una urgencia menor, no dudes en contactarnos, para verificar disponibilidad y posibilidad de atención.
                        </div>
                        <button onClick={handleClick2} className='text-start p-4 hover:bg-hoverSec border-solid border-[1px]  border-hoverSec text-xl md:text-2xl duration-300'>¿Tienen consultorio?  </button>
                        <div className={isopen2 ? "p-4 duration-300 text-xl text-secondary" : "h-0 text-white collapse duration-300"}>
                            No, somos prestadores de servicio de salud totalmente a domicilio.
                        </div>
                        <button onClick={handleClick3} className='text-start p-4 hover:bg-hoverSec border-solid border-[1px] focus:text-hoverPri  border-hoverSec md:text-2xl text-xl'>¿Tienen servicio de imágenes y laboratorio?  </button>
                        <div className={isopen3 ? "p-4 duration-300 text-xl text-secondary" : "h-0 text-white collapse duration-300"}>
                            No tenemos estos servicios como propios; sin embargo, tenemos alianza con un laboratorio clínico, que toma muestras a domicilio 24/7. Estamos en la búsqueda de nuestro aliado en imágenes diagnosticas.
                        </div>
                        <button onClick={handleClick4} className='text-start p-4 hover:bg-hoverSec border-solid border-[1px]  border-hoverSec text-xl md:text-2xl'>¿La atención es inmediata? </button>
                        <div className={isopen4 ? "p-4 duration-300 text-xl text-secondary" : "h-0 text-white collapse duration-300"}>
                            No siempre hay disponibilidad inmediata, sin embargo, prometemos una atención en las siguientes 24h.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Questions;
