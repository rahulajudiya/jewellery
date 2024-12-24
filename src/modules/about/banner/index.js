import React from 'react'
import banner from '../../../asset/image/breadcumb-bg-3.webp'
import right from '../../../asset/icon/arrowred.svg'
import logo from '../../../asset/image/title-shape-1.svg'
import leaf from '../../../asset/image/leaf.png'
import deal from '../../../asset/icon/deal.svg'
import book from '../../../asset/icon/book.svg'
import call from '../../../asset/icon/call.jpg'
import aboutgrid from '../../../asset/image/aboutgrid.webp'

export default function Banner() {
  return (
    <div>
      <div className='relative'>
        <div>
          <img src={banner} alt='banner' className='h-full ' />
        </div>
        <div className='absolute top-[40%] left-[10%] '>
          <div>
            <h2 className='uppercase text-[62px] text-white tracking-wide '>
              about us
            </h2>
          </div>
          <div className='flex  items-center'>
            <div>
              <p className='text-red uppercase '>home </p>
            </div>
            <div>
              <img src={right} alt='right' />
            </div>
            <div>
              <p className='text-white uppercase '>about us</p>
            </div>

          </div>

        </div>
      </div>
      <div className='bg-bgblack py-[100px]'>
        <div className='max-w-[1280px] mx-auto'>
          <div className='grid grid-cols-2 gap-8'>
            <div>
              <div>
                <img src={leaf} alt='leaf' />
              </div>
              <div>
                <p className='text-red text-[18px] uppercase'>about us</p>
                <h2 className='text-[50px] text-white uppercase tracking-wider'>Graceful Drops</h2>
              </div>
              <div className='pt-5'>
                <img src={logo} alt='logo' />
              </div>
              <div>
                <p className='text-white pt-5 text-[18px]'>Lorem ipsum dolor sit amet, conse elit, sedid golden eiusmod tempor aboret dolore magna aliqua. i psum conseel dimonds usndi labois sitamet sedid sedid do eiusm.</p>
              </div>
              <div className='flex pt-8 items-center gap-8'>
                  <div className='flex items-center gap-5'>
                      <div>
                        <img src={book} alt='book'/>
                      </div>
                      <div>
                        <p className='text-white text-[18px] font-semibold'>Online Booking</p>
                      </div>
                  </div>
                  <div className='flex items-center gap-5'>
                      <div>
                        <img src={deal} alt='deal'/>
                      </div>
                      <div>
                        <p className='text-white text-[18px] font-semibold'>Amazing Deals</p>
                      </div>
                  </div>
              </div>
              <div className='flex gap-8 pt-8'>
                  <div>
                    <button className='uppercase bg-red text-white text-[18px] py-4 px-10 font-bold'>
                      contact us
                    </button>
                  </div>
                  <div className='flex items-center gap-5'>
                      <div>
                        <img src={call} alt='call' className='rounded-full'/>
                      </div>
                      <div>
                        <p className='uppercase text-uptext text-[18px] tracking-widest'>call for us</p>
                        <span className='text-red text-[18px] tracking-wide'>
                          +1 444 888 966
                        </span>
                      </div>
                  </div>
              </div>
            </div>
            <div>
              <img src={aboutgrid} alt='aboutgrid' className='h-full w-full' />
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
