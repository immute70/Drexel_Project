import Image from 'next/image'


export default function Home() {
  return (
    <main className='container py-9'>
      <div className='section-1 flex items-center content-center justify-between p-24 lg:my-3'>
          <div>
              <div className='pb-20'>
                  <h1>CHERNER<span>ARMCHAIR</span></h1>
                  <p className='cherner-p'>the 1958 moulded plywood armchair by Norman Chester</p>
              </div>

              <div >
                  <p className='p-view-now'>VIEW NOW</p>
                  <img src='/images/section-1/Line%201.svg'></img>
              </div>
          </div>
          <div>
              <img src='/images/section-1/sec1-chair.png'></img>
          </div>
      </div>

      <div className='section-2 py-36'>
          <div>
              <div className='section-2-categories flex justify-between pb-10'>
                  <div className='flex'>
                      <div className='pr-12'>
                          <p>FURNITURE</p>
                      </div>
                      <div className='pr-12'>
                          <p>LIGHTING</p>
                      </div>
                      <div className='pr-12'>
                          <p>SOFAS</p>
                      </div>
                      <div className='pr-12'>
                          <p>LOUNGE CHAIR</p>
                      </div>
                      <div className='pr-12'>
                          <p>ALL</p>
                          <img src='/images/section-2/Line%202.svg'></img>
                      </div>
                  </div>
                  <div className='flex'>
                      <p>BACK</p>
                      <img src='/images/section-2/Line%203.svg' className='px-3'></img>
                      <p>HERE</p>
                  </div>
              </div>
              <div className='flex justify-between'>
                  <div className='publication-block'>
                      <div className='publication-img relative'>
                          <p className='absolute right-4 top-3'>HOT</p>
                          <img src='/images/section-2/publication/sec2-img1%201.png'></img>
                      </div>
                      <div className='flex flex-col flex-wrap items-center'>
                          <p className='pt-5'>FIXED DOWN SCONCE</p>
                          <img src='/images/section-2/publication/Stars-1.svg' className='pt-2'></img>
                          <p className='pt-2'>159.99 $</p>
                      </div>

                  </div>
                  <div className='publication-block'>
                      <div className='publication-img relative'>
                          <p className='absolute right-4 top-3'>SALE</p>
                          <img src='/images/section-2/publication/sec2-img2%201.png'></img>
                      </div>
                      <div className='flex flex-col flex-wrap items-center'>
                          <p className='pt-5'>CAST PENDANT</p>
                          <img src='/images/section-2/publication/Stars-1.svg' className='pt-2'></img>
                          <p className='pt-2'>159.99 $</p>
                      </div>

                  </div>
                  <div className='publication-block'>
                      <div className='publication-img relative'>
                          <p className='absolute right-4 top-3'></p>
                          <img src='/images/section-2/publication/sec2-img3%201.png'></img>
                      </div>
                      <div className='flex flex-col flex-wrap items-center'>
                          <p className='pt-5'>THE SWEEPER and FUNNEL</p>
                          <img src='/images/section-2/publication/Stars-1.svg' className='pt-2'></img>
                          <p className='pt-2'>159.99 $</p>
                      </div>

                  </div>
                  <div className='publication-block'>
                      <div className='publication-img relative'>
                          <p className='absolute right-4 top-3'>HOT</p>
                          <img src='/images/section-2/publication/sec2-img4%203.png'></img>
                      </div>
                      <div className='flex flex-col flex-wrap items-center'>
                          <p className='pt-5'>SMART TEAPOT</p>
                          <img src='/images/section-2/publication/Stars-1.svg' className='pt-2'></img>
                          <p className='pt-2'>159.99 $</p>
                      </div>

                  </div>
              </div>
          </div>
      </div>

      <div className='container py-20'>
          <div className='section-3 px-28 py-16 relative'>
              <div >
                  <h1>DREXEL</h1>
                  <p className='sec-3-text'>PETS SLEEPING BAG</p>
                  <div>
                      <p className='p-view-now'>VIEW NOW</p>
                      <img src='/images/section-1/Line%201.svg'></img>
                  </div>
              </div>
              <div className='sec-3-img flex absolute right-24 items-end'>
                  <div>
                      <img src='/images/section-3/123%201.png' className='pr-20'></img>
                  </div>
                  <div>
                      <img src='/images/section-3/dog%201.png'></img>
                  </div>
              </div>
          </div>
      </div>

        <div className='section-4 py-36'>
            <div>
                <div className='section-2-categories flex justify-between pb-10'>
                    <div className='flex'>
                        <div className='pr-12'>
                            <p>NEW ARRIVAL</p>
                        </div>
                        <div className='pr-12'>
                            <p>FEATURED</p>
                            <img src='/images/section-4/Line%202.svg'></img>
                        </div>
                        <div className='pr-12'>
                            <p>BESTSELLER</p>
                        </div>
                        <div className='pr-12'>
                            <p>HOT</p>
                        </div>
                    </div>
                    <div className='flex'>
                        <p>BACK</p>
                        <img src='/images/section-2/Line%203.svg' className='px-3'></img>
                        <p>HERE</p>
                    </div>
                </div>
                <div className='flex justify-between'>
                    <div className='publication-block'>
                        <div className='publication-img relative'>
                            <p className='absolute right-4 top-3'>HOT</p>
                            <img src='/images/section-4/sec4-img1%201.png'></img>
                        </div>
                        <div className='flex flex-col flex-wrap items-center'>
                            <p className='pt-5'>EVA SOLO HERB POT</p>
                            <img src='/images/section-2/publication/Stars-1.svg' className='pt-2'></img>
                            <p className='pt-2'>159.99 $</p>
                        </div>

                    </div>
                    <div className='publication-block'>
                        <div className='publication-img relative'>
                            <p className='absolute right-4 top-3'>SALE</p>
                            <img src='/images/section-4/sec4-img2%201.png'></img>
                        </div>
                        <div className='flex flex-col flex-wrap items-center'>
                            <p className='pt-5'>NELSON SUNBRUST CLOCK</p>
                            <img src='/images/section-2/publication/Stars-1.svg' className='pt-2'></img>
                            <p className='pt-2'>259.99 $</p>
                        </div>

                    </div>
                    <div className='publication-block'>
                        <div className='publication-img relative'>
                            <p className='absolute right-4 top-3'></p>
                            <img src='/images/section-4/sec2-img4%203.png'></img>
                        </div>
                        <div className='flex flex-col flex-wrap items-center'>
                            <p className='pt-5'>SMART TEAPOT</p>
                            <img src='/images/section-2/publication/Stars-1.svg' className='pt-2'></img>
                            <p className='pt-2'>239.99 $</p>
                        </div>

                    </div>
                    <div className='publication-block'>
                        <div className='publication-img relative'>
                            <p className='absolute right-4 top-3'>HOT</p>
                            <img src='/images/section-4/sec4-img3%201.png'></img>
                        </div>
                        <div className='flex flex-col flex-wrap items-center'>
                            <p className='pt-5'>NELSON SUNBRUST CLOCK</p>
                            <img src='/images/section-2/publication/Stars-1.svg' className='pt-2'></img>
                            <p className='pt-2'>159.99 $</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>

        <div className='container landSection'>
            <div className='section-5 px-64 py-40 flex flex-col items-center'>
                <div className='flex flex-col items-center'>
                    <h1>KEEP UPDATED</h1>
                    <p>SIGN UP FOR OUR NEWLETTER TO RECEIVE ON EXLUSIVE OFFER</p>
                </div>
                <div>
                    <div className='flex flex-row items-center'>
                        <input type='text' placeholder='Enter your email' className='py-4 pl-5 pr-80'></input>
                        <button className='py-5 px-14'>SUBSCRIBE</button>
                    </div>
                </div>
            </div>
        </div>

        <div className='container py-36'>
            <div className='flex flex-row justify-between'>
                <img src='/images/section-6/sticker1%201.svg'></img>
                <img src='/images/section-6/sticker2%201.svg'></img>
                <img src='/images/section-6/sticker3%201.svg'></img>
                <img src='/images/section-6/sticker4%201.svg'></img>
                <img src='/images/section-6/sticker5%201.svg'></img>
                <img src='/images/section-6/sticker6%201.svg'></img>
            </div>
        </div>
    </main>
  )
}
