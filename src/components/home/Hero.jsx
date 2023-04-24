import React from 'react'

const Hero = () => {
  return (
    <div className="w-9/12 h-[512px]  bg-primary rounded-xl flex">
      <div className="flex flex-col gap-8 w-1/2 p-2 sm:p-6 lg:p-16">
        <h1 className="text-6xl font-black text-[#1f1f1f] w-full">Aceite organico CBD</h1>
        <p className="text-[#8E8E8E] w-full">Descubre el poder del aceite cannábico para aliviar el dolor, reducir el estrés y la ansiedad, y promover el bienestar general. Nuestro aceite cannábico de alta calidad está hecho de ingredientes naturales y es seguro, efectivo y fácil de usar. Si estás buscando una solución natural para mejorar tu salud y bienestar, ¡prueba nuestro aceite cannábico hoy mismo!</p>
        <button className="bg-white text-[#1f1f1f] w-full p-4 rounded font-bold">Ver productos</button>
      </div>
      <div className="h-full w-1/2 flex justify-center items-center px-4 relative">
        <img src="./vectores/2vector.svg" alt="vector" className='pointer-events-none absolute left-0 w-36'/>
        <img src="./vectores/1vector.svg" alt="vector" className='pointer-events-none w-96 h-fit absolute bottom-0' />
        <img src="./vectores/sosteniendo.svg" alt="sosteniendo" className='pointer-events-none w-48 h-fit absolute bottom-0' />
        <img src="./vectores/3vector.svg" alt="vector" className='pointer-events-none  absolute right-16 top-16 h-36'/>
      </div>
    </div>
  )
}

export default Hero