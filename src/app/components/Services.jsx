import React from 'react';
import Image from 'next/image';

const Services = () => {
    return (
        <div id='services'>
            <div className="max-w-[960px] mx-auto py-20">
                <h2 className='text-6xl text-white text-center py-20'>Servicios</h2>
                <div className="grid gap-6 md:grid-cols-2">
                    <div className="bg-white relative p-4 min-h-[500px] font-medium shadow-lg rounded-3xl">
                        <div className="absolute opacity-10 right-0">
                            <Image
                                src='/images/logoFondoC.png'
                                alt='decorate'
                                width={400}
                                height={600}
                            />
                        </div>
                        <h2 className='text-center text-3xl font-semibold text-primary py-10'>Medicina general</h2>
                        <ul className='p-2 my-4 list-inside text-secondary list-disc pl-4  text-2xl'>
                            <li>Consulta médica presencial (con posibilidad de aplicación de medicamentos por parte de enfermería)</li>
                            <li>Teleconsulta por video asistencia</li>
                            <li>Sueroterapia (sueros Heel)</li>
                            <li>Terapia con Vitamina C</li>
                        </ul>
                    </div>
                    <div className="">
                        <div className="bg-white relative p-4 min-h-[500px] font-medium shadow-lg rounded-3xl">
                            <div className="absolute opacity-10 right-0">
                                <Image
                                    src='/images/logoFondoC.png'
                                    alt='decorate'
                                    width={400}
                                    height={600}
                                />
                            </div>
                            <h2 className='text-center text-primary text-3xl font-semibold py-10'>Enfermería</h2>
                            <ul className='p-2 my-4 text-secondary list-inside list-disc pl-4  text-2xl'>
                                <li>Aplicación de medicamentos intramusculares e intravenosos</li>
                                <li>Retiro de puntos de sutura</li>
                                <li>Curación de heridas menores</li>
                                <li>Curación de ostomías</li>
                                <li>Paso, cambio y retiro de sondas vesicales evacuantes y permanentes</li>
                                <li>Flebotomía terapéutica</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;
