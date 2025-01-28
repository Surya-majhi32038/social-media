import Image from 'next/image'
import React from 'react'

function FriendRequestOption() {
    return (
        <div className='flex justify-between'>
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

            {/* chooise option  */}
            <div className='flex items-center gap-2'>
                <Image
                    src="/reject.png"
                    alt='reject png'
                    width={10}
                    height={10}
                    className='w-5 h-5 rounded-full object-cover cursor-pointer'
                />
                <Image
                    src="/accept.png"
                    alt='reject png'
                    width={10}
                    height={10}
                    className='w-5 h-5 rounded-full object-cover cursor-pointer'
                />
                
            </div>
        </div>
    )
}

export default FriendRequestOption