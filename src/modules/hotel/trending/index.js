import React from 'react'
import gridleft from '../../../asset/image/trendinggrid1.webp'
import pendantgrid from '../../../asset/image/pendantgrid.webp';
import ringgrid from '../../../asset/image/ringgrid.webp';
import setgrid from '../../../asset/image/setgrid.webp';
import chaingrid from '../../../asset/image/chaingrid.webp';


export default function Trending() {
  return (
    <div>
      <div className='bg-bgblack pt-[50px] pb-[100px]'>
        <div className=' text-center'>
            <p className='uppercase tracking-widest text-red'>exclusive collection</p>
            <h2 className='uppercase text-[50px] tracking-widest text-white'>top Trending Products</h2>
        </div>
        <div className='max-w-[1200px] flex mx-auto pt-[50px] gap-5'>
            <div className='w-[35%] '>
                <div>
                    <img src={gridleft} alt='gridleft' className='w-full h-[700px] object-cover'/>
                </div>
            </div>
            <div className='w-[65%] grid grid-cols-2 gap-5 '>
                    <div className='bg-white text-center rounded-3xl'>
                        <div className='flex justify-center '>
                        <img src={pendantgrid} alt='pendantgrid' className='h-[200px] w-[200px] object-cover'/>
                        </div>
                        <div className='mt-[50px]'>
                          <h2 className='text-[22px] font-bold tracking-widest'>Flower  Pendant</h2>
                          <p className='text-red text-[18px] font-semibold'>$355.00</p>
                        </div>
                    </div>
                    <div className='bg-white text-center rounded-3xl'>
                        <div className='flex justify-center     '>
                        <img src={ringgrid} alt='ringgrid'  className='h-[200px] w-[200px] object-cover'/>
                        </div>
                        <div className='mt-[50px]'>
                          <h2 className='text-[22px] font-bold tracking-widest'>Flower  Pendant</h2>
                          <p className='text-red text-[18px] font-semibold'>$355.00</p>
                        </div>
                    </div>
                    <div className='bg-white text-center rounded-3xl' >
                        <div className='flex justify-center'>
                        <img src={setgrid} alt='setgrid'  className='h-[200px] w-[200px] object-cover'/>
                        </div>
                        <div className='mt-[50px]'>
                          <h2 className='text-[22px] font-bold tracking-widest'>Flower  Pendant</h2>
                          <p className='text-red text-[18px] font-semibold'>$355.00</p>
                        </div>
                    </div>
                    <div className='bg-white text-center rounded-3xl'>
                        <div className='flex justify-center'>
                        <img src={chaingrid} alt='chaingrid'  className='h-[200px] w-[200px] object-cover'/>
                        </div>
                        <div className='mt-[50px]'>
                          <h2 className='text-[22px] font-bold tracking-widest'>Flower  Pendant</h2>
                          <p className='text-red text-[18px] font-semibold'>$355.00</p>
                        </div>
                    </div>
            </div>

        </div>
      </div>
    </div>
  )
}
