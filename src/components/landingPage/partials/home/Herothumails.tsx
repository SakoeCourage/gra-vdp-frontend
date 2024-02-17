import React from 'react'
import Image from 'next/image'

function Herothumbnails() {
    return (
        <div className='flex items-center ml-10 justify-center py-[2.5rem] '>
            
            <nav className=' flex items-center w-full gap-4 justify-between'>
                <nav className='flex items-center flex-col gap-[1.5rem] grow w-full'>
                <Image height={620} width={413} alt='' className='h-[17.5rem] w-[17rem] rounded-full aspect-square' quality={100} priority src={"/images/hero-thumbnails/3.jpg"} />
                <Image height={620} width={413} alt='' className='h-[17.5rem] w-[17rem] rounded-full aspect-square' quality={100} priority src={"/images/hero-thumbnails/2.jpg"} />
                </nav>
                <nav className='flex items-center flex-col gap-[1.5rem] grow w-full'>
                <Image height={620} width={413} alt='' className='h-[11.5rem] w-[17rem] rounded-full aspect-square' quality={100} priority src={"/images/hero-thumbnails/1.jpg"} />
                <Image height={620} width={413} alt='' className='h-[17.5rem] w-[17rem] rounded-full aspect-square' quality={100} priority src={"/images/hero-thumbnails/7.jpg"} />
                </nav>
            </nav>
        </div>
    )
}

export default Herothumbnails