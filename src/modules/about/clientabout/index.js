import React from 'react'
import Slider from "react-slick";
import banner from '../../../asset/image/clientbanner.webp'
import clientbg from '../../../asset/image/clientbg.webp'
import sliderlogo1 from '../../../asset/image/slider logo 1.jpg'
import left from '../../../asset/icon/iconamoon--arrow-left-2-duotone.svg'
import right from '../../../asset/icon/iconamoon--arrow-right-2-bold.svg'
import slidetree from '../../../asset/image/slidetree.svg'


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
       
        className='absolute top-[20%] right-[10%]'
        onClick={onClick}
      >
        <img src={right} alt='left' className='h-8'/>
      </div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
     
         className='absolute top-[20%] left-[10%]'
        onClick={onClick}
      >
        <img src={left} alt='left' className='h-8'/>

      </div>
    );
  }

export default function Aboutclient() {
    var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
    return (
        <div>
            <div className='grid grid-cols-2'>
                <div>
                    <img src={banner} alt='banner' className='w-full h-full object-cover' />
                </div>
                <div className='relative'>
                    <div className='h-full'>
                        <img src={clientbg} alt='clientbg' className='w-full h-full object-cover' />
                    </div>
                    <div className='absolute top-10 left-[18%] text-center'>
                        <p className='text-red text-[20px] font-semibold tracking-wider '>
                            CLIENT TESTIMONIALS
                        </p>
                        <h2 className='text-[60px]'>Our Happy Clients</h2>
                    </div>
                    <div className='absolute  max-w-[500px] z-10 left-[15%] top-[30%] mt-[50px]'>
                        <Slider {...settings}>
                            <div>
                                <div className='flex justify-center' >
                                    <img src={sliderlogo1} className='rounded-full' />
                                </div>
                                <div className=' text-black pt-[30px] text-center'>
                                Lorem ipsum dolor sit amet, conse elit, sedid golden eiusmod tempor aboret dolore magna aliqua. ipsum conseel dimonds usndi labois sitamet sedid sedid do eiusm.

                                </div>
                                <div className='pt-[30px]'>
                                    <p className='uppercase font-bold text-center tracking-widest'>
                                       - alaxander lee -
                                    </p>
                                </div>
                            </div>
                            <div>
                                <div className='flex justify-center' >
                                    <img src={sliderlogo1} className='rounded-full' />
                                </div>
                                <div className=' text-black pt-[30px] text-center'>
                                Lorem ipsum dolor sit amet, conse elit, sedid golden eiusmod tempor aboret dolore magna aliqua. ipsum conseel dimonds usndi labois sitamet sedid sedid do eiusm.
                                </div>
                                <div className='pt-[30px]'>
                                    <p className='uppercase font-bold text-center tracking-widest'>
                                       - alaxander lee -
                                    </p>
                                </div>
                            </div>
                            <div>
                                <div className='flex justify-center' >
                                    <img src={sliderlogo1} className='rounded-full' />
                                </div>
                                <div className=' text-black pt-[30px] text-center'>
                                Lorem ipsum dolor sit amet, conse elit, sedid golden eiusmod tempor aboret dolore magna aliqua. ipsum conseel dimonds usndi labois sitamet sedid sedid do eiusm.

                                </div>
                                <div className='pt-[30px]'>
                                    <p className='uppercase font-bold text-center tracking-widest'>
                                       - alaxander lee -
                                    </p>
                                </div>
                            </div>
                           

                        </Slider>
                    </div>
                    <div className='absolute top-[50%] right-[0]'>
                        <img src={slidetree} alt='slidetree' className='h-full w-full'/>
                    </div>
                </div>
            </div>

        </div>
    )
}
