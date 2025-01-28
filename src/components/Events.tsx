import Image from 'next/image'
import React from 'react'

function Events() {
    return (
        <div className='flex flex-col shadow-md gap-5 rounded-lg p-4 bg-white'>
            <span className='font-medium text-gray-500 '>
                Birthdays
            </span>

            {/* celebrate and profile option */}
            <div className='flex items-center justify-between'>
                <div className='flex gap-2 items-center cursor-pointer'>
                    <Image
                        src="https://images.pexels.com/photos/8762189/pexels-photo-8762189.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt='friends picture'
                        width={20}
                        height={20}
                        className='w-9 h-9 rounded-full object-cover'
                    />
                    <span className='font-medium'>Surya Majhi</span>
                </div>
                <div className='text-white cursor-pointer bg-blue-600 p-1 rounded-lg'>
                    Celebrate
                </div>
            </div>

            {/* upcoming events  */}
            <div className='flex cursor-pointer gap-5 items-center bg-[#f1f5f9] py-5 px-2 rounded-lg'>
                <Image
                src="/gift.png"
                alt='gift png'
                width={20}
                height={20}
                className='w-10 h-10 '
                />
                <div className='flex flex-col gap-1'>
                    <p className='text-sm'>Upcoming Birthdays</p>
                    <p className='text-xs text-gray-500'>See the ohter have 16 upcoming birthdays</p>
                </div>
            </div>
        </div>
    )
}

export default Events