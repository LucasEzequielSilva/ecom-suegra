import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'


const Layout = ({children}) => {
  return (
    <>
    <Navbar/>
    {children}
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"/>
    <a href="https://api.whatsapp.com/send?phone=51955081075&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Varela%202." class="fixed w-[60px] h-[60px] bottom-[40px] right-[40px] bg-[#25d366] text-[#fff] rounded-[50px] text-[30px] shadow-md z-10 flex justify-center items-center" target="_blank">
    <i class="fa fa-whatsapp my-float"></i>
    </a>
    <Footer/>
    </>
  )
}

export default Layout