import React from 'react'
import header from '../../../asset/logo/header.svg';
import menu from '../../../asset/icon/ep--menu.svg';
import heart from '../../../asset/icon/solar--heart-linear.svg';
import bag from '../../../asset/icon/solar--bag-bold.svg';

export default function Header() {
    return (
        <div>
            <div className='bg-header py-[30px] '>
                <div className='flex justify-center border-b border-gray-700 pb-5'>
                    <img src={header} alt='header' />
                </div>
                <div className='grid grid-cols-3 pt-5 justify-between'>
                    <div className='h-[30px] w-[30px]'>
                        <img src={menu} alt='menu' className='h-full w-full' />
                    </div>
                    <div className='flex gap-10 items-center '>
                        <div>
                            <a className='text-white text-[16px] font-semibold'>HOME</a>
                        </div>
                        <div>
                            <a className='text-white text-[16px] font-semibold'>ABOUT</a>
                        </div>
                        <div>
                            <a className='text-white text-[16px] font-semibold'>WATCH</a>
                        </div>
                        <div>
                            <a className='text-white text-[16px] font-semibold'>JEWELLERY</a>
                        </div>
                        <div>
                            <a className='text-white text-[16px] font-semibold'>CONTACT</a>
                        </div>

                    </div>
                    <div className='flex gap-2 justify-end'>
                        <div>
                            <p className='uppercase text-white text-[16px]'>Wishlist</p>
                        </div>
                        <div className='h-[20px] w-[20px]'>
                            <img src={heart} alt='heart' className='h-full w-full' />
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}
