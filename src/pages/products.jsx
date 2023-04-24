import React, { useEffect,useState, useRef } from "react";

const Hero = () => {
  let [open, setOpen] = useState(false)
  const scrollRef = useRef(null);
  useEffect(() => {
    document.title = "Productos";
  }, []);
  const handleOpen = () =>{
    setOpen(!open)
  }
  

  const handleScrollToBottom = () => {
    // Hacer scroll suave hacia abajo
    scrollRef.current.scrollIntoView({ behavior: 'smooth' });
  }
  return (
    <div className="absolute min-h-[100vh] w-full flex flex-col gap-4 items-center justify-center bg-[#F5F5F5] top-0">
      <div className='shadow w-full h-screen flex flex-col justify-center items-center gap-16  rounded-xl  bg-[url("https://images.ctfassets.net/4f3rgqwzdznj/8ZoB3kcOx077lFeL8GDiS/cfacc02cd8e1c8386a361270750c07da/woman_adding_CBD_oil_to_tea-1364649183.jpg")] '>
        <div className="flex flex-col w-1/2 gap-4 text-center justify-center items-center">
          <h1 className="text-4xl font-bold text-acento w-full">
            Los mejores aceites del condado
          </h1>
          <p className="text-[#666]">
            Tenemos todo lo que buscas, tenemos los mejores productos y las
            mejores marcas. Te invitamos a ver nuestros productos en stock.
          </p>
          <button onClick={handleScrollToBottom} className="shadow flex gap-4 bg-white hover:bg-slate-100 w-fit p-4 rounded font-bold text-acento px-16">
            VER MAS
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="w-full min-h-[100vh] flex flex-col justify-center items-center" ref={scrollRef}>
        {/* row para sort */}
        <div className="w-full p-4">
          {/* div de sort */}
          <div className="flex gap-2">
            <div className="">

              <button onClick={()=>handleOpen()} className="bg-white flex justify-center items-center gap-2 border p-2 px-4 rounded text-sm text-acento hover:bg-slate-100">Sort
              {!open ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
              </svg>
              }
              </button>
              <div className="bg-white w-28 h-28">

              </div>

            </div>
          </div>
        </div>
        {/* sección de aside y products */}
        <div className="flex p-4 gap-4 w-full bg-black">
          <div className="w-2/4"></div>
          <div className="grow"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
