import React from 'react'
import model from '../../../asset/image/jewellerymodel.webp'
import flower from '../../../asset/icon/flower.svg'
import line from '../../../asset/icon/line.svg'
import roundedring from '../../../asset/image/roundring.webp'
import roundedgola from '../../../asset/image/roundgola.webp'
import roundedearrings from '../../../asset/image/roungearrings.webp'

export default function Homecollection() {
    return (
        <div>
            <div className='bg-rahul w-full h-[100vh] bg-no-repeat relative'>

                <div>
                    <img src={model} alt='model' className=' h-[100vh] object-cover'/> 
                </div>
                <div className='absolute top-[15%] left-[48%] text-black text-center'>
                    <p className='text-red uppercase text-[22px]'>collection</p>
                    <h2 className='text-[40px]'>SHOP BY CATEGORY</h2>
                </div>
                <div className='absolute top-5 right-5'>
                 <img src={flower} alt='flower'/> 
                </div>
                <div className='absolute top-[5%] left-[15%]'>
                 <img src={line} alt='line'/> 
                </div>
                <div className='absolute top-[10%] left-[4%]'>
                 <h2 className='uppercase text-[90px] text-white tracking-widest'>earring</h2>
                </div>
                <div className='1100px grid grid-cols-3 top-[35%] left-[25%] absolute z-10 gap-10'>
                    <div className='bg-white py-[50px] w-full px-[50px] rounded-[100px] text-center'>
                        <div>
                            <img src={roundedring} alt='roundedring' className='rounded-full'/>
                        </div>
                        <div className='border border-black w-[60px] ml-[32%] mt-5'></div>
                        <div className='pt-2'>
                            <p className='text-black text-[20px] font-semibold'>Wedding Ring</p>
                            <span className='block text-red pt-2 font-bold uppercase'>20 product</span>
                        </div>
                    </div>
                    <div className='bg-white py-[50px] w-full px-[50px] rounded-[100px] text-center'>
                        <div>
                            <img src={roundedgola} alt='roundedgola' className='rounded-full'/>
                        </div>
                        <div className='border border-black w-[60px] ml-[32%] mt-5'></div>
                        <div className='pt-2'>
                            <p className='text-black text-[20px] font-semibold'>Diamoand Pendant</p>
                            <span className='block text-red pt-2 font-bold uppercase'>15 product</span>
                        </div>
                    </div>
                    <div className='bg-white py-[50px] w-full px-[50px] rounded-[100px] text-center'>
                        <div>
                            <img src={roundedearrings} alt='roundedearrings' className='rounded-full'/>
                        </div>
                        <div className='border border-black w-[60px] ml-[32%] mt-5'></div>
                        <div className='pt-2'>
                            <p className='text-black text-[20px] font-semibold'>Woman Earring</p>
                            <span className='block text-red pt-2 font-bold uppercase'>10 product</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
