import Link from 'next/link'
import React from 'react'

export default function card({open2}) {
  return (
      <Link rel="noopener noreferrer" href="/" tabIndex={0} onClick={(e)=>console.log(e.target)} className={'flex flex-col p-2 grow cursor-pointer   active:shadow rounded'+(!open2 ?' w-60 h-72':' w-full h-80')}>
          <img className='select-none pointer-events-none w-full h-full object-cover object-center rounded' src="https://images.unsplash.com/photo-1604866830513-d54766457f45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="product" />
          <h2 aria-level="3" className='text-[#566270] font-medium'>Monstera Deliciosa</h2>
          <p>$89</p>
      </Link>
  )
}
