import Image from 'next/image'


export default function Home() {
  return (
    <main className='container py-9'>
      <div className='
      section-1
      flex
      items-center
      content-center
      justify-between
      p-24
      lg:my-3
      lg:flex-col-reverse
      lg:items-center
      lg:justify-center
      lg:px-7
      lg:py-16
      '>
          <div className='
          lg:flex
          lg:flex-col
          lg:items-center
          '>
              <div className='
              pb-20
              lg:pb-10
              lg:flex
              lg:flex-col
              lg:items-center
              '>
                  <div className='
                  lg:flex
                  lg:flex-col
                  lg:items-center

                  '>
                      <h1 className=''>CHERNER
                          <span className='lg:hidden'>ARMCHAIR</span>
                      </h1>
                      <h2 className='lg:mr-3 lg:mb-3'>ARMCHAIR</h2>
                  </div>
                  <p className='cherner-p'>the 1958 moulded plywood armchair by Norman Chester</p>
              </div>

              <div >
                  <p className='p-view-now border-b-2 border-gray-400 w-fit'>VIEW NOW</p>
                  {/*<img src='/images/section-1/Line%201.svg'></img>*/}
              </div>
          </div>
          <div className='lg:px-6 lg:pb-14'>
              <img src='/images/section-1/sec1-chair.png'></img>
          </div>
      </div>

      <div className='section-2 py-36 lg:px-7 lg:py-20'>
          <div>
              <div className='
              section-2-categories
              flex
              justify-between
              pb-10

              '>
                  <div className='flex lg:flex-wrap'>
                      <div className='mr-12 lg:mr-3'>
                          <p>FURNITURE</p>
                      </div>
                      <div className='mr-12 lg:mr-3'>
                          <p>LIGHTING</p>
                      </div>
                      <div className='mr-12 lg:mr-3'>
                          <p>SOFAS</p>
                      </div>
                      <div className='mr-12 lg:mr-2.5'>
                          <p>LOUNGE CHAIR</p>
                      </div>
                      <div className='mr-12 lg:mr-0'>
                          <p className='border-b-2 border-gray-400'>ALL</p>
                          {/*<img src='/images/section-2/Line%202.svg'></img>*/}
                      </div>
                  </div>
                  <div className='flex lg:hidden'>
                      <p>BACK</p>
                      <img src='/images/section-2/Line%203.svg' className='px-3'></img>
                      <p>HERE</p>
                  </div>
              </div>
              <div className='flex justify-between lg:flex-wrap'>
                  <div className='publication-block cursor-pointer'>
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
                  <div className='publication-block'>
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
                  <div className='publication-block'>
                      <div className='publication-img relative'>
                          <p className='absolute right-4 top-3'></p>
                          <img src='/images/section-2/publication/sec2-img3%201.png' className='lg:hidden'></img>
                          <img src='/images/section-2/publication/publication-mob/sec2-img3-mob.png' className='mob-screen-img lg:block'></img>
                      </div>
                      <div className='flex flex-col flex-wrap items-center'>
                          <p className='pt-5'>THE SWEEPER and FUNNEL</p>
                          <img src='/images/section-2/publication/Stars-1.svg' className='pt-2'></img>
                          <p className='pt-2 lg:pb-5'>159.99 $</p>
                      </div>

                  </div>
                  <div className='publication-block'>
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
              </div>
          </div>
      </div>

      <div className='container py-20 lg:py-4'>
          <div className='
          section-3
          px-28
          py-16
          relative
          lg:flex
          lg:items-center
          lg:flex-row
          lg:flex-wrap
          lg:justify-between
          lg:px-7
          '>
              <div >
                  <h1>DREXEL</h1>
                  <p className='sec-3-text'>PETS SLEEPING BAG</p>
                  <div>
                      <p className='p-view-now border-b-2 border-gray-400 w-fit'>VIEW NOW</p>
                      {/*<img src='/images/section-1/Line%201.svg'></img>*/}
                  </div>
              </div>
              <div className='sec-3-img flex absolute  right-24 items-end lg:static lg:right-0'>
                  <div>
                      <img src='/images/section-3/123%201.png' className='pr-20 lg:hidden'></img>
                      <img src='/images/section-3/mobile/123%201.png' className='sec-3-img-mobile lg:block'></img>
                  </div>
                  <div>
                      <img src='/images/section-3/dog%201.png' className='lg:hidden'></img>
                      <img src='/images/section-3/mobile/dog%202.png' className='sec-3-img-mobile lg:block'></img>
                  </div>
              </div>
          </div>
      </div>

        <div className='section-4 py-36 lg:px-7 lg:py-20'>
            <div>
                <div className='
              section-2-categories
              flex
              justify-between
              pb-10

              '>
                    <div className='flex lg:flex-wrap'>
                        <div className='mr-12 lg:mr-3'>
                            <p>NEW ARRIVAL</p>
                        </div>
                        <div className='mr-12 lg:mr-3 border-b-2 border-gray-400 w-fit'>
                            <p>FEATURED</p>
                        </div>
                        <div className='mr-12 lg:mr-3'>
                            <p>BESTSELLER</p>
                        </div>
                        <div className='mr-12 lg:mr-2.5'>
                            <p>HOT</p>
                        </div>
                    </div>
                    <div className='flex lg:hidden'>
                        <p>BACK</p>
                        <img src='/images/section-2/Line%203.svg' className='px-3'></img>
                        <p>HERE</p>
                    </div>
                </div>
                <div className='flex justify-between lg:flex-wrap'>
                    <div className='publication-block'>
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
                    <div className='publication-block'>
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
                    <div className='publication-block'>
                        <div className='publication-img relative'>
                            <p className='absolute right-4 top-3'></p>
                            <img src='/images/section-4/sec2-img4%203.png' className='lg:hidden'></img>
                            <img src='/images/section-4/section-4-mob/sec2-img4-mob.png' className='mob-screen-img lg:block'></img>
                        </div>
                        <div className='flex flex-col flex-wrap items-center'>
                            <p className='pt-5'>SMART TEAPOT</p>
                            <img src='/images/section-2/publication/Stars-1.svg' className='pt-2'></img>
                            <p className='pt-2 lg:pb-5'>239.99 $</p>
                        </div>

                    </div>
                    <div className='publication-block'>
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
                </div>
            </div>
        </div>

        <div className='container landSection'>
            <div className='section-5 px-64 py-40 flex flex-col items-center lg:px-7 lg:py-16'>
                <div className='flex flex-col items-center'>
                    <h1>KEEP UPDATED</h1>
                    <p className='lg:hidden'>SIGN UP FOR OUR NEWLETTER TO RECEIVE ON EXLUSIVE OFFER</p>
                    <div className='sec-5-p-mob lg:flex lg:flex-col lg:text-center'>
                        <p>SIGN UP FOR OUR NEWLETTER TO RECEIVE ON</p>
                        <p>EXLUSIVE OFFER</p>
                    </div>
                </div>
                <div>
                    <div className='flex flex-row items-center'>
                        <input type='text' placeholder='ENTER YOUR EMAIL' className='py-5 pl-5 pr-80 lg:pr-24 lg:py-4'></input>
                        <button className='py-5 px-14 lg:py-4 lg:px-6'>SUBSCRIBE</button>
                    </div>
                </div>
            </div>
        </div>

        <div className='container py-36 lg:px-7 lg:py-20'>
            <div className='flex flex-row justify-between lg:flex-wrap '>
                <img src='/images/section-6/sticker1%201.svg' className='lg:w-20 lg:h-20 lg:mr-10 lg:mb-10'></img>
                <img src='/images/section-6/sticker2%201.svg' className='lg:w-20 lg:h-20 lg:mr-10 lg:mb-10'></img>
                <img src='/images/section-6/sticker3%201.svg' className='lg:w-20 lg:h-20 lg:mb-10'></img>
                <img src='/images/section-6/sticker4%201.svg' className='lg:w-20 lg:h-20 lg:mr-10'></img>
                <img src='/images/section-6/sticker5%201.svg' className='lg:w-20 lg:h-20 lg:mr-10'></img>
                <img src='/images/section-6/sticker6%201.svg' className='lg:w-20 lg:h-20'></img>
            </div>
        </div>
    </main>
  )
}
