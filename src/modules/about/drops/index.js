import React from 'react'
import shiping from '../../../asset/icon/shiping.svg'
import support from '../../../asset/icon/support.svg'
import money from '../../../asset/icon/money.svg'
import product from '../../../asset/icon/product.svg'
import aboutlady from '../../../asset/image/aboutlady.webp'
import abouthand from '../../../asset/image/abouthand.webp'
import aboutring from '../../../asset/icon/aboutring.svg'
import waranty from '../../../asset/image/waranty.svg'
import title from '../../../asset/icon/title-shape-1 (1).svg'


export default function Drops() {
    return (
        <div className='bg-bgblack py-[100px] text-white '>
            <div className='max-w-[1280px] mx-auto border-b border-gray-700 pb-[50px]'>
                <div className='grid grid-cols-4 gap-8 items-center text-center'>
                    <div>
                        <div className='flex justify-center'>
                            <img src={shiping} alt='shiping' />
                        </div>
                        <div className='pt-5' >
                            <h2 className='text-[28px] font-semibold tracking-widest'>Free Shipping</h2 >
                            <p className='text-[18px] pt-3 tracking-wider text-uptext'>Fact that a reader will distracted</p>
                        </div>
                    </div>
                    <div>
                        <div className='flex justify-center'>
                            <img src={support} alt='support' />
                        </div>
                        <div className='pt-5' >
                            <h2 className='text-[28px] font-semibold tracking-widest'>online Support</h2 >
                            <p className='text-[18px] pt-3 tracking-wider text-uptext'>within 30 days for an exchange</p>
                        </div>
                    </div>
                    <div>
                        <div className='flex justify-center'>
                            <img src={money} alt='money' />
                        </div>
                        <div className='pt-5' >
                            <h2 className='text-[28px] font-semibold tracking-widest'>Money Back</h2 >
                            <p className='text-[18px] pt-3 tracking-wider text-uptext'>Fact that a reader will distracted</p>
                        </div>
                    </div>
                    <div>
                        <div className='flex justify-center'>
                            <img src={product} alt='product' />
                        </div>
                        <div className='pt-5' >
                            <h2 className='text-[28px] font-semibold tracking-widest'>Return Product</h2 >
                            <p className='text-[18px] pt-3 tracking-wider text-uptext'>Fact that a reader will distracted</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-2 max-w-[1280px] mx-auto pt-[100px] gap-8'>
                <div className='flex items-center'>
                    <div>
                        <img src={aboutlady} alt='aboutlady'/>
                    </div>
                    <div>
                        <img src={abouthand} alt='abouthand'/>
                    </div>
                    <div className='bg-red w-[170px] h-[260px] rounded-full flex justify-center ml-[-80px]'>
                        <img src={aboutring} alt='aboutring' className='w-[80px]'/> 
                    </div>
                </div>
                <div className='text-center' >
                    <div className='flex justify-center'>
                        <img src={waranty} alt='waranty'/>
                    </div>
                    <div>
                        <p className='text-red uppercase text-[18px] pt-8 tracking-widest font-semibold'>customs jewelry</p>
                        <h2 className='text-[62px] font-medium tracking-wide'>
                        Graceful Ear Drops
                        </h2>
                    </div>
                    <div className='flex justify-center pt-3'>
                        <img src={title} alt='title'/>
                    </div>
                    <div className='text-[18px] pt-6 '>
                        <p>Lorem ipsum dolor sit amet, conse elit, sedid do eiusmod tempor incidit laboret dolore magna aliqua. Quis ipsum conseel usndi laboris sitamet sedid sedid do eiusm.</p>
                        <button className='bg-red text-[18px] py-4 px-7 font-bold uppercase mt-8'>
                            contact now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
