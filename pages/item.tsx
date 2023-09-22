


export default function Item() {
    return (

        <main className='bg-white py-40 lg:py-20'>
            <div className='container'>
                <div className='flex flex-row justify-center content-center lg:flex-col'>
                    <div className='sec-1-left basis-6/12 lg:px-7 lg:flex lg:flex-col'>
                        <div className='flex justify-center pb-24 lg:pb-0'>
                            <img src='/images/items/section-1/sec2-img3%201.png' className='lg:w-36 lg:h-60'></img>
                        </div>

                        <div className='lg:flex lg:justify-between lg:items-end'>
                            <div className='lg:flex mb-10 lg:mb-0 hidden lg:pb-9'>
                                <img src='/images/items/section-1/circle-white.svg' className='mr-3 w-7 h-7'></img>
                                <img src='/images/items/section-1/circle-black.svg' className='w-7 h-7'></img>
                            </div>
                            <div className='sec-1-img-back flex justify-around lg:justify-end'>
                                <img src='/images/items/section-1/shopping-cart-img-1%201.png' className='pl-16 lg:pl-0 lg:max-w-16 lg:max-h-16'></img>
                                <img src='/images/items/section-1/shopping-cart-img-2%201.png' className='pr-16 lg:pr-0 lg:max-w-16 lg:max-h-16'></img>
                            </div>
                        </div>




                    </div>
                    <div className='sec-1-right basis-6/12 pt-24 pl-20 lg:pl-0 lg:pt-10 lg:pb-10'>
                        <div className='lg:px-7'>
                            <p className='sec-1-top'>PREMIUM  SWEEPER</p>
                            <h1>THE SWEEPER and FUNNEL</h1>
                            <div className='sec-1-review flex items-center pb-5'>
                                <img src='/images/items/section-1/star.svg' className='pr-1.5'></img>
                                <p>5/5</p>
                                <img src='/images/items/section-1/small-circle.svg'></img>
                                <span>14 Reviews</span>
                            </div>
                            <div className='flex mb-10 lg:hidden'>
                                <img src='/images/items/section-1/circle-white.svg' className='mr-2.5'></img>
                                <img src='/images/items/section-1/circle-black.svg'></img>
                            </div>
                            <p className='sec-1-desc'>Experience the ultimate in comfort and luxury with our
                                <br></br> Sweeper - Premium. Crafted from high-quality teakwood
                                <br></br> and designed with a robust structure, it offers
                                <br></br> unparalleled support and is enhanced with sumptuous
                                <br></br> memory foam for an exquisite sensation of comfort.</p>
                            <p className='sec-1-price'>159.99 $</p>
                            <div className='sec-1-button-count flex items-center mb-10'>
                                <button>-</button>
                                <p className='mx-2.5'>1</p>
                                <button>+</button>
                            </div>
                            <div className='sec-1-buttons'>
                                <button className='mx-10'>ADD TO CART</button>
                                <button>BUY NOW</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='section-2-item mb-40 lg:px-7 lg:mb-16'>
                    <div className='section-2-button mt-32 lg:mt-20'>
                        <button>DESCRIPTION</button>
                        <button>CUSTOMER REVIEW</button>
                        <button>PRODUCT TAGS</button>
                    </div>
                    <div>
                        <p>Flywood is known for its strength and resistance to moisture and temperature
                            fluctuations, making it an excellent choice for a funnel. It can withstand
                            the rigors of pouring various substances without warping or deteriorating.</p>
                        <p>The sweeper is crafted from premium, high-end plastic known for its exceptional
                            durability and longevity. This choice of material ensures that "The Sweeper"
                            can withstand daily use and rigorous cleaning tasks.</p>
                    </div>
                </div>

                <div className='section-3-item lg:px-7'>
                    <div>
                        <h1>RELATED PRODUCT</h1>
                    </div>
                    <div className='flex flex-wrap '>

                        <div className='publication-block w-fit mr-7 mb-20 lg:mr-3.5 lg:mb-7'>
                            <div className='publication-img relative'>
                                <p className='absolute right-4 top-3'>HOT</p>
                                <img src='/images/section-2/publication/sec2-img1%201.png' className='lg:hidden'></img>
                                <img src='/images/section-2/publication/publication-mob/sec2-img1-mob.png' className='mob-screen-img lg:block'></img>
                            </div>
                            <div className='flex flex-col flex-wrap items-center'>
                                <p className='pt-5'>FIXED DOWN SCONCE</p>
                                <img src='/images/section-2/publication/Stars-1.svg' className='pt-2'></img>
                                <p className='pt-2 lg:pb-5'>159.99 $</p>
                            </div>

                        </div>

                        <div className='publication-block w-fit mr-7 mb-20 lg:mr-3.5 lg:mb-7'>
                            <div className='publication-img relative'>
                                <p className='absolute right-4 top-3'>SALE</p>
                                <img src='/images/section-2/publication/sec2-img2%201.png' className='lg:hidden'></img>
                                <img src='/images/section-2/publication/publication-mob/sec2-img2-mob.png' className='mob-screen-img lg:block'></img>
                            </div>
                            <div className='flex flex-col flex-wrap items-center'>
                                <p className='pt-5'>CAST PENDANT</p>
                                <img src='/images/section-2/publication/Stars-1.svg' className='pt-2'></img>
                                <p className='pt-2 lg:pb-5'>159.99 $</p>
                            </div>
                        </div>

                        <div className='publication-block w-fit mr-7 mb-20 lg:mr-3.5 lg:mb-7'>
                            <div className='publication-img relative'>
                                <p className='absolute right-4 top-3'>HOT</p>
                                <img src='/images/section-4/sec4-img3%201.png' className='lg:hidden'></img>
                                <img src='/images/section-4/section-4-mob/sec4-img3-mob.png' className='mob-screen-img lg:block'></img>
                            </div>
                            <div className='flex flex-col flex-wrap items-center'>
                                <p className='pt-5'>NELSON SUNBRUST CLOCK</p>
                                <img src='/images/section-2/publication/Stars-1.svg' className='pt-2'></img>
                                <p className='pt-2 lg:pb-5'>159.99 $</p>
                            </div>

                        </div>

                        <div className='publication-block w-fit mr-7 mb-20 lg:mr-3.5 lg:mb-7'>
                            <div className='publication-img relative'>
                                <p className='absolute right-4 top-3'>HOT</p>
                                <img src='/images/section-2/publication/sec2-img4%203.png' className='lg:hidden'></img>
                                <img src='/images/section-2/publication/publication-mob/sec2-img4-mob.png' className='mob-screen-img lg:block'></img>
                            </div>
                            <div className='flex flex-col flex-wrap items-center'>
                                <p className='pt-5'>SMART TEAPOT</p>
                                <img src='/images/section-2/publication/Stars-1.svg' className='pt-2'></img>
                                <p className='pt-2 lg:pb-5'>159.99 $</p>
                            </div>

                        </div>

                        <div className='publication-block w-fit mr-7 lg:mr-3.5 lg:mb-7'>
                            <div className='publication-img relative'>
                                <p className='absolute right-4 top-3'>HOT</p>
                                <img src='/images/section-4/sec4-img1%201.png' className='lg:hidden'></img>
                                <img src='/images/section-4/section-4-mob/sec4-img1-mob.png' className='mob-screen-img lg:block'></img>
                            </div>
                            <div className='flex flex-col flex-wrap items-center'>
                                <p className='pt-5'>EVA SOLO HERB POT</p>
                                <img src='/images/section-2/publication/Stars-1.svg' className='pt-2'></img>
                                <p className='pt-2 lg:pb-5'>159.99 $</p>
                            </div>

                        </div>

                        <div className='publication-block w-fit mr-7 lg:mr-3.5 lg:mb-7'>
                            <div className='publication-img relative'>
                                <p className='absolute right-4 top-3'>SALE</p>
                                <img src='/images/section-4/sec4-img2%201.png' className='lg:hidden'></img>
                                <img src='/images/section-4/section-4-mob/sec4-img2-mob.png' className='mob-screen-img lg:block'></img>
                            </div>
                            <div className='flex flex-col flex-wrap items-center'>
                                <p className='pt-5'>NELSON SUNBRUST CLOCK</p>
                                <img src='/images/section-2/publication/Stars-1.svg' className='pt-2'></img>
                                <p className='pt-2 lg:pb-5'>259.99 $</p>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </main>

    )
}