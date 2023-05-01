import React from 'react'

export default function card({open2}) {
  return (
    <article onClick={(e)=>console.log(e.target)} tabIndex={0} className={'flex flex-col p-2 grow cursor-pointer   active:shadow rounded'+(!open2 ?' w-60 h-72':' w-full h-80')}>
        <img className='select-none pointer-events-none w-full h-full object-cover object-center rounded' src="https://images.unsplash.com/photo-1604866830513-d54766457f45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="product" />
        <h5 className='text-[#566270] font-medium'>Monstera Deliciosa</h5>
        <p>$89</p>
    </article>
  )
}
