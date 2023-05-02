import {  useEffect, useState } from 'react'
import { Disclosure  } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example({show, setShow}) {
  const [productSection, setProductSection] = useState(false);
  const [homeSection, setHomeSection] = useState(false);
  const [contactSection, setContactSection] = useState(false);
  const navigation = [
    { name: 'Home', href: '/', current: homeSection },
    { name: 'Products', href: '/products', current: productSection },
    { name: 'Contacts', href: '/contacts', current: contactSection }
  ]
  const controlNavbar = () => {
    if (window.scrollY > window.innerHeight * 0.1) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

      useEffect(()=>{

        window.addEventListener("scroll", controlNavbar)
          if(window.scrollY >=0 && window.scrollY <= 862){
            setHomeSection(true)
          }else{
            setHomeSection(false)
          }
          if(scrollY>= 862){setProductSection(true)}else{setProductSection(false)}
          window.addEventListener('scroll', controlNavbar)
          return () => {
            window.removeEventListener('scroll', controlNavbar)
          }
      }, [])

  return (
    <Disclosure as="nav" className={`fixed top-0 bg-transparent py-4 min-h-[15vh] sm:flex sm:flex-col items-center justify-center  z-10 w-full transition duration-300 ${show ? '' : 'transform -translate-y-full'}`}>
      {({ open }) => (
        <>
          <div className="sm:w-9/12 px-2 sm:px-6 lg:px-0">
            <div className=" flex h-16 items-center justify-between">
              <div className="sm:absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              {/* Logo y navegación */}
              <div className="flex flex-1 items-center justify-center sm:items-stretch gap-4 relative ">
                {/* Logos */}
                <div className="flex flex-shrink-0 items-center  justify-center sm:absolute sm:left-0 sm:justify-center sm:bottom-0 sm:h-full">
                  <img
                    className="block w-24    lg:hidden pointer-events-none"
                    src="./logo.png"
                    alt="Your Company"
                  />
                  <img
                    className="hidden w-24   lg:block pointer-events-none"
                    src="./logo.png"
                    alt="Your Company"
                  />
                </div>
                {/* ----------------- */}
                {/* Navegación */}
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item, i) => (
                      <p
                        key={i}
                        className={classNames(
                          item.current ? 'font-bold text-green-600' : 'text-[#8E8E8E] hover:text-green-600',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </p>
                    ))}
                  </div>
                </div>
                {/* ----------------- */}
              </div>
          
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item, i) => (
                <Disclosure.Button
                  key={i}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
