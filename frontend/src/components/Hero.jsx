import React from 'react'
import Spline from "@splinetool/react-spline";
import 'boxicons/css/boxicons.min.css';

const Hero = () => {
  return (
    <main className='flex lg:mt-20 flex-col lg:flex-row items-center justify-between min-h-[calc(90vh-6rem)]'>
        <div className='max-w-xl ml-[5%] z-10 mt-[90%] md:mt-[60%] lg:mt-0'>

            {/* Tag-box introduccion */}
            <div className='relative w-[95%] sm:w-48 h-10 bg-gradient-to-r from-[#656565] to-[#e99b63] shadow-[0_0_15px_rgba(255,255,255,0.4)] rounded-full'>
                <div className='absolute inset-[3px] bg-black rounded-full flex items-center justify-center gap-1'>
                    <i class='bx bx-diamond'></i> Introducción

                </div>
            </div>

            {/* Titulo */}
            <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wider my-8'>
                INGENIERO 
                <br />
                MECANICO
            </h1>

            {/* Resumen */}
            <p className='text-base sm:text-lg tracking-wider text-gray-400 max-w-[25rem] lg:max-w-[30rem]'>
                Ingeniero mecánico con experiencia en diseño 3D, desarrollo de herramientas digitales y automatización de procesos industriales. 
                Trabajo con Python, JavaScript, SolidWorks, AutoCAD y plataformas como Prometheus y Azure. 
                Me enfoco en mejorar la eficiencia operativa a través de soluciones técnicas, integración de sistemas y soporte funcional.
            </p>

            {/* Buttons */}
            <div className='flex gap-4 mt-12'>
                <a className='border border-[#2a2a2a] py-2 sm:py-3 px-4 sm:px-5 rounded-full sm:text-lg text-sm font-semibold tracking-wider transition-all duration-300 hover:bg-[#1a1a1a]' href="#">
                    Conoce mas <i class='bx bx-link-external'></i>
                </a>

                <a className='border border-[#2a2a2a] py-2 sm:py-3 px-8 sm:px-10 rounded-full sm:text-lg text-sm font-semibold tracking-wider transition-all duration-300 hover:bg-[#1a1a1a] bg-gray-300 text-black hover:text-white' href="/Andres_Ortega_CV.pdf" download>
                    Descargar HV <i class='bx bx-link-external'></i>
                </a>

            </div>

        </div>

        {/* 3D */}
        <Spline className='absolute lg:top-0 top-[-20%] bottom-0 lg:left-[25%] sm:left-[-2%] h-full' 
        scene="https://prod.spline.design/gdaS3quFAmtUTHkC/scene.splinecode" />


    </main>
  )
}

export default Hero

