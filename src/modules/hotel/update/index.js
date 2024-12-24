import React from 'react'
import pendant from '../../../asset/image/pendantgrid.webp'
import pend from '../../../asset/image/pend.webp'
import tree from '../../../asset/image/tree.svg';
import updatering from '../../../asset/image/updategrid1.webp'
import updatehand from '../../../asset/image/updategrid2.webp'
import updatelady from '../../../asset/image/updategrid3.webp'

export default function Update() {
    return (
        <div>
            <div className='bg-bgblack py-[100px]'>
                <div className='max-w-[1280px] mx-auto grid grid-cols-2 gap-8'>
                    <div className='flex gap-5 items-center p-[50px] bg-update rounded-3xl'>
                        <div >
                            <img src={pendant} alt='pendant' />
                        </div>
                        <div>
                            <p className='text-red uppercase tracking-widest text-[15px] font-semibold'>save up to 40% off</p>
                            <h2 className='text-black text-[40px] font-semibold'>
                                Custom Wedding Rings
                            </h2>
                            <button className='uppercase text-white bg-upbtn text-[12px] py-4 px-7 mt-5' >
                                order now
                            </button>
                        </div>
                    </div>
                    <div className='flex gap-5 items-center p-[50px] bg-update rounded-3xl'>
                        <div >
                            <img src={pend} alt='pend' />
                        </div>
                        <div>
                            <p className='text-red uppercase tracking-widest text-[15px] font-semibold'>
                                save up to 60% off</p>
                            <h2 className='text-black text-[40px] font-semibold'>
                                Custom Party Rings
                            </h2>
                            <button className='uppercase text-white bg-upbtn text-[12px] py-4 px-7 mt-5' >
                                order now
                            </button>
                        </div>
                    </div>
                </div>
                <div className='pt-[100px] relative'>
                    <div className='text-center'>
                        <p className='text-red uppercase tracking-wider text-[20px] font-semibold '>
                            our news & blog
                        </p>
                        <h2 className='text-white text-[62px] '>
                            Latest News update
                        </h2>
                    </div>
                    <div className='absolute top-0 right-10'>
                        <img src={tree} alt='tree' />
                    </div>
                    <div className='max-w-[1280px] mx-auto py-[50px]'>
                        <div className='grid grid-cols-3 gap-5'>
                            <div>
                                <div>
                                    <img src={updatering} alt='updatering' className='w-full h-full object-cover ' />
                                </div>
                                <div className='border-b border-gray-500 pb-5'>
                                    <p className='text-[15px] text-uptext uppercase pt-5 tracking-wider'>july 2, 2024 / frank lee</p>
                                    <h2 className='text-white text-[35px]'>French Historian Vincent</h2>
                                </div>
                                <div className='pt-5'>
                                    <a className='text-white text-[12px] uppercase tracking-[3px]  border-b border-red pb-1 cursor-pointer hover:text-red duration-300'>read more</a>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <img src={updatehand} alt='updatehand' className='w-full h-full object-cover ' />
                                </div>
                                <div className='border-b border-gray-500 pb-5'>
                                    <p className='text-[15px] text-uptext uppercase pt-5 tracking-wider'>july 2, 2024 / frank lee</p>
                                    <h2 className='text-white text-[35px]'>French Historian Vincent</h2>
                                </div>
                                <div className='pt-5'>
                                    <a className='text-white text-[12px] uppercase tracking-[3px]  border-b border-red pb-1 cursor-pointer hover:text-red duration-300'>read more</a>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <img src={updatelady} alt='updatelady' className='w-full h-full object-cover ' />
                                </div>
                                <div className='border-b border-gray-500 pb-5'>
                                    <p className='text-[15px] text-uptext uppercase pt-5 tracking-wider'>july 2, 2024 / frank lee</p>
                                    <h2 className='text-white text-[35px]'>French Historian Vincent</h2>
                                </div>
                                <div className='pt-5'>
                                    <a className='text-white text-[12px] uppercase tracking-[3px]  border-b border-red pb-1 cursor-pointer hover:text-red duration-300'>read more</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
