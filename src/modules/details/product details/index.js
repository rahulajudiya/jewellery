import React from "react";
import Slider from "react-slick";
import detailmain from '../../../asset/image/detailmain.webp'
import detailsecond from '../../../asset/image/detailsecond.webp'
import detailthird from '../../../asset/image/detailthird.webp'
import detailfourth from '../../../asset/image/detailfourth.webp'
import orstar from '../../../asset/icon/tabler--star-filled.svg';
import pop from '../../../asset/icon/pepicons-pop--line-y.svg'
import heart from '../../../asset/icon/solar--heart-linear.svg';



export default function Productdetail() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className='bg-bgblack py-[100px]'>
            <div className='max-w-[1280px] mx-auto'>
                <div className='flex gap-8'>
                    <div className='w-[10%]'>
                        <div className='pb-[20px]'>
                            <img src={detailmain} alt='detailmain' />
                        </div>
                        <div className='pb-[20px]'>
                            <img src={detailsecond} alt='detailsecond' />
                        </div>
                        <div className='pb-[20px]'>
                            <img src={detailthird} alt='detailthird' />
                        </div>
                        <div className='pb-[20px]'>
                            <img src={detailfourth} alt='detailfourth' />
                        </div>
                    </div>
                    <div className='w-[45%]'>
                        <Slider >
                            <div className='pb-[20px]'>
                                <img src={detailmain} alt='detailmain' className="w-full h-full" />
                            </div>
                            <div className='pb-[20px]'>
                                <img src={detailsecond} alt='detailsecond' />
                            </div>
                            <div className='pb-[20px]'>
                                <img src={detailthird} alt='detailthird' />
                            </div>
                            <div className='pb-[20px]'>
                                <img src={detailfourth} alt='detailfourth' />
                            </div>
                        </Slider>

                    </div>
                    <div className="w-[45%] px-5">
                        <div className="flex items-center">
                            <div className="flex">
                                <div>
                                    <img src={orstar} alt="orstar" />
                                </div>
                                <div>
                                    <img src={orstar} alt="orstar" />
                                </div>
                                <div>
                                    <img src={orstar} alt="orstar" />
                                </div>
                                <div>
                                    <img src={orstar} alt="orstar" />
                                </div>
                                <div>
                                    <img src={orstar} alt="orstar" />
                                </div>
                            </div>
                            <div>
                                <img src={pop} alt="pop" />
                            </div>
                            <div>
                                <p className="text-white uppercase text-[18px]">3 review</p>
                            </div>
                        </div>
                        <div className="pt-5">
                            <h2 className="text-[42px] text-white">
                                Cropped Golden Pendant
                            </h2>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="pt-5">
                                <p className="text-white text-[25px] tracking-wider font-semibold">$1250.00</p>
                            </div>
                            <div className="pt-5">
                                <p className="uppercase text-red text-[22px]">- in stock</p>
                            </div>
                        </div>
                        <div className="pt-5 ">
                            <p className="text-white text-[18px]">Lorem ipsum dolor sit amet, conse elit, sedid that was eiusmod aboret dolore magna aliqua conseel usndi daimond the laois sitamet sedid sedid eiusm.
                            </p>
                        </div>
                        <div className="flex pt-5 items-center gap-3 ">
                            <div className="flex gap-4 bg-[#15191f] py-3 px-10 w-[30%] ">
                                <div>
                                    <p className="text-white ">-</p>
                                </div>
                                <div >
                                    <p className="text-white txet-[18px]">1</p>
                                </div>
                                <div>
                                    <p className="text-white">+</p>
                                </div>
                            </div>
                            <div className="w-[70%]">
                                <button className="text-white text-[18px] uppercase font-bold bg-[#15191f]  py-[10px] px-[100px] w-full">
                                    add to cart
                                </button>
                            </div>
                        </div>

                        <div className="flex gap-5 pt-6 pb-3 items-center border-b border-gray-600">
                            <div>
                                <img src={heart} alt="heart" />
                            </div>
                            <div className="uppercase text-uptext text-[18px] tracking-widest font-semibold">add to Wishlist</div>
                        </div>
                        <div className="flex pt-5 gap-5">
                            <div>
                                <p className="text-white text-[18px] uppercase font-semibold">Category :</p>
                            </div>
                            <p className="text-uptext text-[18px] uppercase font-semibold tracking-wider">round, dial, class</p>
                        </div>
                        <div className="flex pt-5 gap-5">
                            <div>
                                <p className="text-white text-[18px] uppercase font-semibold">Tags :</p>
                            </div>
                            <p className="text-uptext text-[18px] uppercase font-semibold tracking-wider">silver, pink, green</p>
                        </div>
                        <div className="flex pt-5 gap-5">
                            <div>
                                <p className="text-white text-[18px] uppercase font-semibold">Category :</p>
                            </div>
                            <p className="text-uptext text-[18px] uppercase font-semibold tracking-wider">round,dial,class</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
