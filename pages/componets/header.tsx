import Link from "next/link";
import Image from "next/image";
import { useState } from "react";


export default function Header() {

    const [showMenu, setShowMenu] = useState(false);

    return (
      <header className='container '>

        <div className='lg:flex lg:justify-between  lg:items-center w-full hidden lg:fixed lg:z-20 relative bg-white'>
            <div className='img-mobile lg:block bg-black hidden w-fit'>
                <img src='/images/header/DREXEL_MOBILE.svg'></img>
            </div>
            <button onClick={() => setShowMenu(!showMenu)} className='lg:block hidden pr-3 z-10'>
                {showMenu ? <img src='/images/header/close-bar.svg'></img> : <img src='/images/header/bars.svg'></img>}
            </button>

            <div className={`link-header flex flex-col p-9 absolute top-0 right-0 transition-all ${showMenu ? `block` : `hidden`}` }>

                <div className='header-top flex justify-between items-center py-5'>
                    <img src='/images/header/heart-mob.svg' className='cursor-pointer' onClick={() => setShowMenu(!showMenu)}></img>
                    <img src='/images/header/cart-mob.svg' className='pl-1 cursor-pointer' onClick={() => setShowMenu(!showMenu)}></img>
                    <img src='/images/header/search-mob.svg' className='pl-1 cursor-pointer' onClick={() => setShowMenu(!showMenu)}></img>
                </div>

                <div className='pt-14 pb-32'>
                    <div className='flex justify-between pb-6'>
                        <Link href='/' onClick={() => setShowMenu(!showMenu)}><p>Home</p></Link>
                        <img src='/images/header/chevron-down-mob.svg' ></img>
                    </div>
                    <div className='flex justify-between pb-6'>
                        <Link href='#' onClick={() => setShowMenu(!showMenu)}><p>Feature</p></Link>
                        <img src='/images/header/chevron-down-mob.svg'></img>
                    </div>
                    <div className='pb-6'>
                        <Link href="/item" onClick={() => setShowMenu(!showMenu)}><p>Store</p></Link>
                    </div>
                    <div>
                        <Link href='#' onClick={() => setShowMenu(!showMenu)}><p>About Us</p></Link>
                    </div>
                </div>

                <div className='header-under-mid flex py-5'>
                    <div >
                        <p className='pr-5 cursor-auto'><Link href={'#'} onClick={() => setShowMenu(!showMenu)}>LOGIN</Link></p>
                    </div>
                    <div className='flex pr-5'>
                        <p className=' cursor-auto'><Link href={'#'} onClick={() => setShowMenu(!showMenu)}>EN</Link></p>
                        <img src='/images/header/chevron-down-mob.svg'></img>
                    </div>
                    <div className='flex '>
                        <p className=' cursor-auto'><Link href={'#'} onClick={() => setShowMenu(!showMenu)}>USD</Link></p>
                        <img src='/images/header/chevron-down-mob.svg' ></img>
                    </div>
                </div>

                <div className='flex justify-between pt-9'>
                    <img src='/images/header/icons8-twitter%201.svg' onClick={() => setShowMenu(!showMenu)}></img>
                    <img src='/images/header/icons8-instagram%201.svg' onClick={() => setShowMenu(!showMenu)}></img>
                    <img src='/images/header/icons8-threads%201.svg' onClick={() => setShowMenu(!showMenu)}></img>
                    <img src='/images/header/icons8-facebook.svg' onClick={() => setShowMenu(!showMenu)}></img>
                </div>

            </div>
        </div>


        <div className='flex justify-between items-center fixed w-ful z-20 container bg-white py-7 lg:hidden'>
            <div className='flex lg:hidden'>
                <div className='flex pr-12'>
                    <Link href='/'><p>Home</p></Link>
                    <img src='/images/chevron-down.svg' ></img>
                </div>
                <div className='flex pr-12'>
                    <Link href='#'><p>Feature</p></Link>
                    <img src='/images/chevron-down.svg'></img>
                </div>
                <div className='pr-12'>
                    <Link href='/item'><p>Store</p></Link>
                </div>
                <div>
                    <Link href='#'><p>About Us</p></Link>
                </div>
            </div>
            <div className='cursor-pointer lg:hidden'>
                <img src='/images/header/DREXEL.svg'></img>
            </div>
            <div className='flex lg:hidden'>
                <p className='pr-10 pl-44 cursor-auto'><Link href={'#'}>LOGIN</Link></p>
                <img src='/images/header/heart.svg' className='cursor-pointer'></img>
                <img src='/images/header/cart.svg' className='pl-4 cursor-pointer'></img>
                <img src='/images/header/search.svg' className='pl-4 cursor-pointer'></img>
            </div>
        </div>
      </header>
    )
}
