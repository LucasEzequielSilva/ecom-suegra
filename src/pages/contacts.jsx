import React from 'react'

const Hero = () => {
  return (
    <div className="w-9/12 h-[512px] p-2 sm:p-6 lg:p-16 bg-primary rounded-xl flex ">
      <div className="flex flex-col gap-8 w-2/5">
        <h1 className="text-6xl font-black text-[#1f1f1f] w-full">Buy your dream plants</h1>
        <p className="text-[#8E8E8E] w-full">Descubre el poder del aceite cannábico para aliviar el dolor, reducir el estrés y la ansiedad, y promover el bienestar general. Nuestro aceite cannábico de alta calidad está hecho de ingredientes naturales y es seguro, efectivo y fácil de usar. Si estás buscando una solución natural para mejorar tu salud y bienestar, ¡prueba nuestro aceite cannábico hoy mismo!</p>
        <button className="bg-white text-[#1f1f1f] w-full p-4 rounded font-bold">Ver productos</button>
      </div>
      <div className="h-full flex-grow bg-black">

      </div>
    </div>
  )
}

export default Hero