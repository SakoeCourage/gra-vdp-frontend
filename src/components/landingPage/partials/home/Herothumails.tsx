import React from 'react'
import Image from 'next/image'

function Herothumbnails() {
    return (
        <div className=' flex z-[-1] overflow-hidden items-center lg:ml-10 justify-center py-[2.5rem] absolute inset-0  lg:relative  '>
            <nav className=' opacity-20 lg:opacity-100 lg:max-h-full max-h-[60dvh] flex items-center w-full gap-4 justify-between'>
                <nav className='flex items-center flex-col gap-[1.5rem] grow w-full'>
                <Image height={620} width={413} alt='' className='lg:h-[17.5rem] lg:w-[17rem] h-[11rem] w-[11rem] rounded-full aspect-square' quality={100} priority src={"/images/hero-thumbnails/3.jpg"} />
                <Image height={620} width={413} alt='' className='lg:h-[17.5rem] lg:w-[17rem] h-[11rem] w-[11rem] rounded-full aspect-square' quality={100} priority src={"/images/hero-thumbnails/2.jpg"} />
                </nav>
                <nav className='flex items-center flex-col gap-[1.5rem] grow w-full'>
                <Image height={620} width={413} alt='' className='lg:h-[11.5rem] lg:w-[17rem] h-[15rem] w-[15rem] rounded-full aspect-square' quality={100} priority src={"/images/hero-thumbnails/1.jpg"} />
                <Image height={620} width={413} alt='' className='lg:h-[17.5rem] lg:w-[17rem] h-[12rem] w-[12rem] rounded-full aspect-square' quality={100} priority src={"/images/hero-thumbnails/7.jpg"} />
                </nav>
            </nav>
        </div>
    )
}

export default Herothumbnails