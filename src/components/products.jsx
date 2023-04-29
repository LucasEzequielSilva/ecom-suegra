import React, {useState} from 'react'

const products = ({scrollRef}) => {
  let [open, setOpen] = useState(false)
  const handleOpen = () =>{
    setOpen(!open)
    console.log(open)
    console.log()
  }
  open ? document.body.style.overflow = "hidden" :  document.body.style.overflow = ""
  const ArrowChanged = () => (
    !open ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
  </svg> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
  </svg>
)
const Select = ({title, value1, value2, value3}) => {
    return (
    <>
        <button onClick={()=>handleOpen()} className="bg-white flex justify-center items-center gap-2 shadow p-2 px-4 rounded text-sm text-acento hover:bg-slate-100 transition delay-150 duration-100 hover:border relative z-10">{title}
            <ArrowChanged/>
        </button>
        <div className={`bg-white w-28 absolute top-10 z-10 shadow-md border opacity-0 transition-opacity duration-300 rounded  ${open ? "h-auto opacity-100" : "h-0"}`}>
            {value1 &&
            <p className="cursor-pointer px-8 py-2 text-acento text-sm hover:bg-slate-100">{value1}</p>
            }
            {value2 &&
            <p className="cursor-pointer px-8 py-2 text-acento text-sm hover:bg-slate-100">{value2}</p>
            }
            {value3 &&
            <p className="cursor-pointer px-8 py-2 text-acento text-sm hover:bg-slate-100">{value3}</p>
            }
        </div>
        { open ? <div className="h-screen w-screen fixed z-0 left-0 top-0" onClick={()=>handleOpen()}></div>
        : ""
        }
        
  </>
)
}
  return (
    <div className="w-full min-h-[100vh] flex flex-col justify-center items-center" ref={scrollRef}>
        {/* row para sort */}
        <div className="w-full p-4">
          {/* div de sort */}
          <div className="flex gap-2 items-start h-fit w-fit relative">
             <Select title="Sort" value1="item 1" value2="item 2" value3={"hola"}/>
          </div>
        </div>
        {/* sección de aside y products */}
        <div className="flex p-4 gap-4 w-full bg-black">
          <div className="w-2/4"></div>
          <div className="grow"></div>
        </div>
      </div>
  )
}

export default products