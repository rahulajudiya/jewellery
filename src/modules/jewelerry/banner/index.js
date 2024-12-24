import React from 'react'
import banner from '../../../asset/image/breadcumb-bg-3.webp'
import right from '../../../asset/icon/arrowred.svg'
import jewepetal from '../../../asset/image/jewepetal.webp'
import jeweline from '../../../asset/image/jeweline.webp'
import jewecropped from '../../../asset/image/jewecropped.webp'
import star from '../../../asset/icon/material-symbols-light--star-outline.svg'


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
              Jewelerry
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
              <p className='text-white uppercase '>jewelerry</p>
            </div>

          </div>

        </div>
      </div>
      <div className='bg-bgblack pt-[100px] '>
            <div className='max-w-[1280px] mx-auto grid grid-cols-2 gap-5'>
                <div className='grid grid-cols-2 gap-5'>
                    <div>
                        <div className='flex justify-center bg-[#101318] bg-opacity-80 py-8 rounded-3xl'>
                            <img src={jewepetal} alt='jewepetal' className='h-[300px] object-cover'/>
                        </div>
                        <div className='text-center pt-5'>
                            <div>
                                <h2 className='text-white text-[25px] font-semibold tracking-wider'>Petal Perfection</h2>
                                <p className='text-red text-[18px] font-semibold'>$155.00</p>
                            </div> 
                            <div className='flex justify-center pt-2 '>
                                <img src={star} alt='star'/>
                                <img src={star} alt='star'/>
                                <img src={star} alt='star'/>
                                <img src={star} alt='star'/>
                                <img src={star} alt='star'/>
                            </div>

                        </div>
                    </div>
                    <div>
                        <div className='flex justify-center bg-[#101318] bg-opacity-80 py-8 rounded-3xl'  >
                            <img src={jeweline} alt='jeweline' className='h-[300px] object-cover'/>
                        </div>
                        <div className='text-center pt-5'>
                            <div>
                                <h2 className='text-white text-[25px] font-semibold tracking-wider'>Golden Line</h2>
                                <p className='text-red text-[18px] font-semibold'>$155.00</p>
                            </div> 
                            <div className='flex justify-center pt-2 '>
                                <img src={star} alt='star'/>
                                <img src={star} alt='star'/>
                                <img src={star} alt='star'/>
                                <img src={star} alt='star'/>
                                <img src={star} alt='star'/>
                            </div>

                        </div>
                    </div>
                </div>
                <div>
                        <div className='flex justify-center bg-[#101318] bg-opacity-80 py-8 rounded-3xl'  >
                            <img src={jewecropped} alt='jewecropped' className='h-[300px]'/>
                        </div>
                        <div className='text-center pt-5'>
                            <div>
                                <h2 className='text-white text-[25px] font-semibold tracking-wider'>Cropped Golden Pendant
                                </h2>
                                <p className='text-red text-[18px] font-semibold'>$155.00</p>
                            </div> 
                            <div className='flex justify-center pt-2 '>
                                <img src={star} alt='star'/>
                                <img src={star} alt='star'/>
                                <img src={star} alt='star'/>
                                <img src={star} alt='star'/>
                                <img src={star} alt='star'/>
                            </div>

                        </div>
                    </div>

            </div>
      </div>
    </div>
  )
}
