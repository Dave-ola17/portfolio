import { useState } from 'react'
import { ImMenu, } from 'react-icons/im'
import { AiOutlineClose, } from 'react-icons/ai'


export const Header = () => { 
    const links = [
        {name: 'Home', href: '/home'},
        {name: 'Projects', href: '/projects'},
        {name: 'About us', href: '/about'},
        {name: 'login', href: '/signup'},
    ]
    let [open, setOpen ] = useState(false)
  return (
    <div className=' w-full max-w-7xl  '>
        <div className='md:flex items-center justify-between py-4 md:px-10 px-7 '>
            {/* logo section  */}
            <div className=' font-bold text-2xl cursor-pointer flex items-center gap-1 '>
                <span className=' text-purple-950 hover:text-white '>David Olayiwola</span>
            </div>
            {/* menu icons */}
            <div onClick={() => setOpen(!open)} className=' text-white md:hidden absolute w-7 h-7 right-8 top-6 cursor-pointer '>
                {
                    open ? <AiOutlineClose /> : <ImMenu />
                }
            </div>
            <ul className={`  md:flex md:items-center md:pb-0 absolute md:static md:z-auto z-10 left-0 w-full
                md:w-auto mt-4 md:mt-0 md:pl-0 pl-9 bg-slate-400 sm:bg-transparent transition-all duration-500 ease-in 
                ${open ? 'transition-all duration-500' : 'hidden'}
                `}>
                {
                    links.map((link) => {
                        return(
                            <li
                            className=' md:ml-8 md:my-0 my-7 font-semibold hover:bg-purple-950 hover:text-white transition-all duration-500'
                                key={link.name}
                            >
                                <a className=' text-white transition-all duration-5000 cursor-pointer px-2 rounded ' 
                                    href={link.href}
                                >
                                    {link.name}
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    </div>
  )
}
