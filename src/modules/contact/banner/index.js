import React from 'react'
import banner from '../../../asset/image/contact.webp'
import right from '../../../asset/icon/arrowred.svg'
import logo from '../../../asset/image/title-shape-1.svg'
import call from '../../../asset/icon/tdesign--call-1.svg';
import mail from '../../../asset/icon/material-symbols--mail-outline.svg';
import facebook from '../../../asset/icon/logos--facebook.svg'
import instagram from '../../../asset/icon/icon-park--instagram.svg'
import twitter from '../../../asset/icon/skill-icons--twitter.svg'
import linkedin from '../../../asset/icon/skill-icons--linkedin.svg'


export default function Banner() {
  return (
    <div>
      <div className='relative'>
        <div>
          <img src={banner} alt='banner' className='h-full object-cover' />
        </div>
        <div className='absolute top-[40%] left-[10%] '>
          <div>
            <h2 className='uppercase text-[62px] text-white tracking-wide '>
              Contact
            </h2>
          </div>
          <div className='flex  items-center'>
            <div>
              <p className='text-red uppercase '>home</p>
            </div>
            <div>
              <img src={right} alt='right' />
            </div>
            <div>
              <p className='text-white uppercase '>Contact</p>
            </div>

          </div>

        </div>
      </div>
      <div className='bg-bgblack py-[100px]'>
        <div className='max-w-[1280px] mx-auto flex gap-[50px]'>
          <div className='w-[40%]'>
            <div>
              <p className='text-red text-[18px] uppercase tracking-wider font-semibold'>contact info</p>
              <h2 className='text-[52px] font-bold text-white uppercase'>get in touch</h2>
            </div>
            <div className='pt-2'>
              <img src={logo} alt='logo' />
            </div >
            <div className='py-5 border-b border-dashed border-gray-500'>
              <p className='text-uptext text-[18px] max-w-[400px]'><span className='text-white uppercase text-[18px]'>address: </span> Dains WQ 966 Munich Expresswa 70 Germany, TX 7859</p>
            </div>
            <div className='flex gap-5 py-5 items-center border-b border-dashed border-gray-500'>
              <div>
                <img src={call} alt='call'/>
              </div>
              <div>
                <p className='text-[15px] text-white font-semibold uppercase'>Customer Service :</p>
              </div>
              <div>
                <p className='text-[16px] text-uptext '>+9-555-888-679</p>
              </div>
            </div>
            <div className='flex gap-5 py-5 items-center border-b border-dashed border-gray-500'>
              <div>
                <img src={mail} alt='mail'/>
              </div>
              <div>
                <p className='text-[15px] text-white font-semibold uppercase'>Careers :</p>
              </div>
              <div>
                <p className='text-[16px] text-uptext uppercase'>luxrio@info.com</p>
              </div>
            </div>
            <div className='flex gap-1 py-5 items-center'>
                <div>
                  <p className='text-white text-[15px] uppercase font-semibold'>follow</p>
                </div>
                <div>
                  <img src={facebook} alt='facebook' className='h-[30px] w-[30px]'/>
                </div>
                <div>
                  <img src={instagram} alt='instagram' className='h-[50px] w-[50px]'/>
                </div>
                <div>
                  <img src={twitter} alt='twitter' className='h-[30px] w-[30px]'/>
                </div>
                <div className='pl-2'>
                  <img src={linkedin} alt='linkedin' className='h-[30px] w-[30px]'/>
                </div>
            </div>
          </div>
          <div className='w-[60%]'>
            <div className='grid grid-cols-2 gap-5'> 
                <div>
                  <input type='text' placeholder='Your Name*' className='w-full bg-[#101318] p-5 outline-none text-white' />
                </div>
                <div>
                  <input type='text' placeholder='Last Name*' className='w-full bg-[#101318] p-5 outline-none text-white' />
                </div>
                <div>
                  <input type='text' placeholder='Email Address*' className='w-full bg-[#101318] p-5 outline-none text-white' />
                </div>
                <div>
                  <input type='text' placeholder='Phone*' className='w-full bg-[#101318] p-5 outline-none text-white' />
                </div>
            </div>
            <div className='pt-5'>
              <textarea className='bg-[#101318] text-white w-full p-5 ' rows={5} >
                Type Your Message
              </textarea>
            </div>
          </div>
        </div>
        <div className='max-w-[1280px] mx-auto pt-[50px]'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14874.796250193616!2d72.87100527160474!3d21.243778844216425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f4fb5c0b087%3A0xb7aabd8a90da0679!2sMota%20Varachha%2C%20Surat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1734927952458!5m2!1sen!2sin"   allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade " className='w-full h-[500px]' ></iframe>
        </div>
      </div> 
    </div>
  )
}
