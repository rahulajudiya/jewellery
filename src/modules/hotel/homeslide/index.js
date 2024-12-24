import React from "react";
import Slider from "react-slick";
import banner from '../../../asset/image/homebanner.webp';
import hand from '../../../asset/image/slidehand.webp';
import ring from '../../../asset/image/ring.webp';
import handring from '../../../asset/image/handring.webp';
import orring from '../../../asset/image/orring.webp';
import leaf from '../../../asset//icon/leaf.png';

export default function Homeslide() {
    const settings = {
        dots: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding:"20px"
    };
    return (
        <div className="slider-container overflow-hidden ">
            <Slider {...settings}>

                <div className='relative'>
                    <div>
                        <img src={banner} alt='banner' className='w-full h-[100vh]' />
                    </div>
                    <div className='absolute top-0 left-0   '>
                        <img src={hand} alt='hand' className='h-[100vh]' />
                    </div>
                    <div className='absolute top-0 right-0'>
                        <img src={ring} alt='ring' className='h-[100vh]' />
                    </div>
                    <div className='absolute top-5 left-[15%]'>
                        <img src={orring} alt='orring' className='w-full h-full' />
                    </div>
                    <div className='absolute top-[40%] left-[35%]'>
                        <h2 className='uppercase text-red text-[90px] '>necklace</h2>
                    </div>
                    <div className='absolute top-[53%] left-[35%]'>
                        <h2 className='uppercase text-black text-[90px] '>jewellery</h2>
                    </div>
                    <div className='absolute top-[72%] left-[35%]'>
                        <p className='uppercase text-black text-[15px] '>holy jewelerry and diamonds <span className='uppercase text-red'> pendants</span></p>
                    </div>
                    <div className='absolute top-[80%] left-[35%]'>
                        <button className='uppercase bg-red text-white px-10 py-3'>
                            shop now
                        </button>
                    </div>
                    <div className='absolute top-[10%] right-[31%]'>
                        <img src={leaf} alt='leaf' />
                    </div>

                </div>
                <div className='relative'>
                    <div>
                        <img src={banner} alt='banner' className='w-full h-[100vh]' />
                    </div>
                    <div className='absolute top-0 left-0   '>
                        <img src={hand} alt='hand' className='h-[100vh]' />
                    </div>
                    <div className='absolute top-0 right-0'>
                        <img src={handring} alt='handring' className='h-[100vh]' />
                    </div>
                    <div className='absolute top-5 left-[15%]'>
                        <img src={orring} alt='orring' className='w-full h-full' />
                    </div>
                    <div className='absolute top-[40%] left-[35%]'>
                        <h2 className='uppercase text-red text-[90px] '>necklace</h2>
                    </div>
                    <div className='absolute top-[53%] left-[35%]'>
                        <h2 className='uppercase text-black text-[90px] '>jewellery</h2>
                    </div>
                    <div className='absolute top-[72%] left-[35%]'>
                        <p className='uppercase text-black text-[15px] '>holy jewelerry and diamonds <span className='uppercase text-red'> pendants</span></p>
                    </div>
                    <div className='absolute top-[80%] left-[35%]'>
                        <button className='uppercase bg-red text-white px-10 py-3'>
                            shop now
                        </button>
                    </div>
                    <div className='absolute top-[10%] right-[31%]'>
                        <img src={leaf} alt='leaf' />
                    </div>

                </div>



            </Slider>
        </div>

    )
}
