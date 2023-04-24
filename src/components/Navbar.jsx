import { Fragment, useEffect, useState } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { useRouter } from 'next/router';

const navigation = [
  { name: 'Home', href: '/', current: false },
  { name: 'Products', href: '/products', current: false },
  { name: 'Contacts', href: '/contacts', current: false }
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
    const [bg, setBg] = useState("")
    const router = useRouter();
    navigation.forEach(item => {
        item.current = (router.pathname === item.href);
      });
      useEffect(()=>{
        setBg(router.pathname != "/products" ? "bg-white" : "bg-transparent");
      }, [router.pathname])
  return (
    <Disclosure as="nav" className={`${bg} py-4 min-h-[15vh] sm:flex sm:flex-col items-center justify-center relative z-10`}>
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
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'font-bold text-[#1e1e1e]' : 'text-[#8E8E8E] hover:text-[#1e1e1e]',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
                {/* ----------------- */}
              </div>
          
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
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
