import Link from 'next/link'
import React, {useState, useRef} from 'react'
import Card from './card'

const products = ({scrollRef}) => {
  let [open, setOpen] = useState(false)
  let [open2, setOpen2] = useState(false)
  let [selected, setSelected] = useState()
  let [categorySelect, setCategorySelect] = useState()
  let firstOption = useRef()
  let secondOption = useRef()
  const handleOpen = () =>{
    setOpen(!open)
  }
  const ArrowChanged = () => (
    !open ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
  </svg> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
  </svg>
)
const Select = () => {
  const selectedFun = (element) => {
    setSelected(element.textContent)
    setOpen(!open)
  }
  const selectedFunKey = (e, element) => {
    if(e.key == "Enter"){
      setSelected(element.textContent)
      setOpen(!open)
    }
  }
    return (
    <div className="select-none flex gap-2 items-start  w-fit h-fit relative">
        <button aria-label="Ordenar productos por precio" onClick={()=>handleOpen()} className="select-none relative z-30 bg-white flex justify-center items-center gap-2 shadow p-2 px-4 rounded text-sm text-acento hover:bg-slate-100 transition delay-150 duration-100   ">Sort
            <ArrowChanged/>
        </button>
        <ul role="listbox"   id="my-listbox" aria-expanded={open ? 'true' : 'false'} className={`select-none bg-white w-fit absolute top-10 right-0 z-10 shadow-md border opacity-0 transition-opacity duration-300 rounded  ${open ? "h-auto opacity-100 z-30" : "h-0 hidden"}`}>
            <li onKeyDown={(e)=>selectedFunKey(e, firstOption.current)} onClick={()=>selectedFun(firstOption.current)} ref={firstOption} aria-selected={selected=="Low Price"} tabIndex="0" aria-controls="my-listbox" role="option" id="my-option-low" className="select-none cursor-pointer px-8 py-2 text-acento text-sm hover:bg-slate-100 min-w-max" >Low Price</li>
            <li onKeyDown={(e)=>selectedFunKey(e, secondOption.current)} onClick={()=>selectedFun(secondOption.current)} ref={secondOption} aria-selected={selected=="Most Price"} tabIndex="0" aria-controls="my-listbox" role="option" id="my-option-most" className="select-none cursor-pointer px-8 py-2 text-acento text-sm hover:bg-slate-100 min-w-max">Most Price</li>
        </ul>
        { open ? <div className="h-screen w-screen fixed z-20 left-0 top-0" onClick={()=>handleOpen()}></div>
        : ""
        }
    </div>
)
}
const SquareGalery = () => {
  return (
    <button className='select-none relative z-30 bg-white flex justify-center items-center gap-2 shadow p-2 px-4 rounded text-sm text-acento hover:bg-slate-100 transition delay-150 duration-100' onClick={()=>setOpen2(!open2)}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-acento select-none overflow-hidden">
        <path strokeLinecap="round" strokeLinejoin="round" d={!open2 ? "M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" : "M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"} />
      </svg>
    </button>
  )
}
  return (
    <div className="w-full min-h-[100vh] flex flex-col justify-start items-center" ref={scrollRef}>
        {/* row para sort */}
        <div className="w-full p-4 select-none flex flex-col items-end px-4 gap-4">
          {/* div de sort */}
          <div className='flex gap-2 w-fit min-h-fit'>
             <Select />
             <SquareGalery/>
          </div>
            <hr className='w-full'/>
            {/* sección de aside y products */}
            <div className="flex p-4 gap-4 w-full min-h-[80vh]">
              {/* Aside */}
              <aside className="w-[20%] flex flex-col">
                <ul className='w-full flex flex-col gap-4' >
                  <li onClick={(e)=>setCategorySelect(e.target.textContent)} className='text-[#566270] cursor-pointer' role="listitem" aria-label="Este elemento seleccionable sirve para indicar que quieres buscar todos los productos" >Todos</li>
                  <li onClick={(e)=>setCategorySelect(e.target.textContent)} className='text-[#566270] cursor-pointer' role="listitem" aria-label="Este elemento seleccionable sirve para indicar que quieres buscar solo los productos de categoria 'aceites'" >Aceites</li>
                  <li onClick={(e)=>setCategorySelect(e.target.textContent)} className='text-[#566270] cursor-pointer' role="listitem" aria-label="Este elemento seleccionable sirve para indicar que quieres buscar solo los productos de categoria 'cremas'" >Cremas</li>
                  <li onClick={(e)=>setCategorySelect(e.target.textContent)} className='text-[#566270] cursor-pointer' role="listitem" aria-label="Este elemento seleccionable sirve para indicar que quieres buscar solo los productos de categoria 'chocolates'" >Chocolates</li>
                </ul>
              </aside>
              {/* products */}
              <div className={"grow w-[80%] h-full rounded flex flex-wrap" + (!open2 ? " justify-between items-center" : " flex-col")}>
                {
                  [1,1,1,1,1,1,1,1,1,1,1,1].map((e, index)=>(<Card key={index}open2={open2}/>))
                }
              </div>
            </div>
        </div>
      </div>
  )
}

export default products