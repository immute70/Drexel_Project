

export default function Header() {
    return (
      <header className='container py-9'>
        <div className='flex justify-between items-center'>
            <div className='flex'>
                <div className='flex pr-12'>
                    <p>Home</p>
                    <img src='/images/chevron-down.svg' ></img>
                </div>
                <div className='flex pr-12'>
                    <p>Feature</p>
                    <img src='/images/chevron-down.svg'></img>
                </div>
                <div className='pr-12'>
                    <p>Store</p>
                </div>
                <div>
                    <p>About Us</p>
                </div>
            </div>
            <div className='cursor-pointer'>
                <img src='/images/header/DREXEL.svg'></img>
            </div>
            <div className='flex'>
                <p className='pr-10 pl-44'>LOGIN</p>
                <img src='/images/header/heart.svg' className='cursor-pointer'></img>
                <img src='/images/header/cart.svg' className='pl-4 cursor-pointer'></img>
                <img src='/images/header/search.svg' className='pl-4 cursor-pointer'></img>
            </div>
        </div>
      </header>
    )
}
