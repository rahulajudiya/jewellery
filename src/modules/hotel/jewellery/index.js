import React from 'react'
import treeimg from '../../../asset/image/tree.svg';
import bglogo from '../../../asset/image/bglogo.svg';
import flowerpendant from '../../../asset/image/product1.webp'
import diamondgold from '../../../asset/image/product2.webp'
import blackpendant from '../../../asset/image/product3.webp'
import weddingring from '../../../asset/image/product4.webp'
import star from '../../../asset//icon/material-symbols-light--star-outline.svg'
import heart from '../../../asset//icon/solar--heart-linear.svg'

export default function Jewellery() {
  return (
    <div className='relative'>
      <div className='bg-bgblack h-[120vh]'>
        <div className='absolute right-[5%] top-[10%]'>
            <img src={treeimg} alt='treeimg'/>
        </div>
        <div>
            <p className='text-red uppercase tracking-widest text-[20px] absolute left-1/2 -translate-x-1/2 -translate-y-1/2 top-[20%]'>Find the perfect</p>
        </div>
        <div> 
            <h2 className='text-white text-[50px] left-1/2 -translate-x-1/2 -translate-y-1/2 top-[28%] absolute'>
            High Class Jewellery
            </h2>
        </div>
        <div >
            <div className='grid grid-cols-4 gap-8 absolute top-[40%] left-[10%] max-w-[1200px] mx-auto'>
                <div className='relative group'>
                    <div className='w-[250px] h-[250px]'>
                        <img src={flowerpendant} alt='flowerpendant' className='w-full h-full rounded-full'/>
                    </div>
                    <div className='absolute top-[28%] left-[38%] opacity-0 group-hover:opacity-100 duration-300'>
                        <img src={heart} alt='heart' className='bg-gray-500 hover:bg-red hover:duration-300 bg-opacity-50 p-5 rounded-full  '/>
                    </div>

                    <div className='text-center'>
                        <h2 className='text-white text-[25px] pt-5'>Flower Pendant </h2>
                        <p className='text-red'>$355.00</p>
                    </div>
                    <div className=' flex gap-1 justify-center'>
                        <div>
                            <img src={star} alt='star'/>
                        </div>
                        <div>
                            <img src={star} alt='star'/>
                        </div>
                        <div>
                            <img src={star} alt='star'/>
                        </div>
                        <div>
                            <img src={star} alt='star'/>
                        </div>
                        <div>
                            <img src={star} alt='star'/>
                        </div>
                    </div>
                </div>
                <div className='relative group'>
                    <div className='w-[250px] h-[250px]'>
                        <img src={diamondgold} alt='diamondgold' className='w-full h-full rounded-full'/>
                    </div>
                    <div className='absolute top-[28%] left-[38%] opacity-0 group-hover:opacity-100 duration-300'>
                        <img src={heart} alt='heart' className='bg-gray-500 hover:bg-red hover:duration-300 bg-opacity-50 p-5 rounded-full  '/>
                    </div>
                    <div className='text-center'>
                        <h2 className='text-white text-[25px] pt-5'>Diamond Gold</h2>
                        <p className='text-red'>$355.00</p>
                    </div>
                    <div className=' flex gap-1 justify-center'>
                        <div>
                            <img src={star} alt='star'/>
                        </div>
                        <div>
                            <img src={star} alt='star'/>
                        </div>
                        <div>
                            <img src={star} alt='star'/>
                        </div>
                        <div>
                            <img src={star} alt='star'/>
                        </div>
                        <div>
                            <img src={star} alt='star'/>
                        </div>
                    </div>
                </div>
                <div className='relative group'>
                    <div className='w-[250px] h-[250px]'>
                        <img src={blackpendant} alt='blackpendant' className='w-full h-full rounded-full'/>
                    </div>
                    <div className='absolute top-[28%] left-[38%] opacity-0 group-hover:opacity-100 duration-300'>
                        <img src={heart} alt='heart' className='bg-gray-500 hover:bg-red hover:duration-300 bg-opacity-50 p-5 rounded-full  '/>
                    </div>
                    <div className='text-center'>
                        <h2 className='text-white text-[25px] pt-5'>Black Pendant </h2>
                        <p className='text-red'>$355.00</p>
                    </div>
                    <div className=' flex gap-1 justify-center'>
                        <div>
                            <img src={star} alt='star'/>
                        </div>
                        <div>
                            <img src={star} alt='star'/>
                        </div>
                        <div>
                            <img src={star} alt='star'/>
                        </div>
                        <div>
                            <img src={star} alt='star'/>
                        </div>
                        <div>
                            <img src={star} alt='star'/>
                        </div>
                    </div>
                </div>
                <div className='relative group'>
                    <div className='w-[250px] h-[250px]'>
                        <img src={weddingring} alt='weddingring' className='w-full h-full rounded-full'/>
                    </div>
                    <div className='absolute top-[28%] left-[38%] opacity-0 group-hover:opacity-100 duration-300'>
                        <img src={heart} alt='heart' className='bg-gray-500 hover:bg-red hover:duration-300 bg-opacity-50 p-5 rounded-full  '/>
                    </div>
                    <div className='text-center'>
                        <h2 className='text-white text-[25px] pt-5'>Wedding Ring</h2>
                        <p className='text-red'>$355.00</p>
                    </div>
                    <div className=' flex gap-1 justify-center'>
                        <div>
                            <img src={star} alt='star'/>
                        </div>
                        <div>
                            <img src={star} alt='star'/>
                        </div>
                        <div>
                            <img src={star} alt='star'/>
                        </div>
                        <div>
                            <img src={star} alt='star'/>
                        </div>
                        <div>
                            <img src={star} alt='star'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
