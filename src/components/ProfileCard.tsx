import Image from 'next/image'
import React from 'react'

function ProfileCard() {
    return (
        <div className='bg-white p-3 text-base gap-8 rounded-md shadow-md flex flex-col'>

            {/* image section */}

            <div className='h-20  relative'>

                {/* oover image  */}
                <Image
                    src="https://images.pexels.com/photos/7180792/pexels-photo-7180792.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt='cover image'
                    fill
                    className='object-cover rounded-md'
                />

                {/* profile page */}
                <Image
                    src="https://images.pexels.com/photos/1391499/pexels-photo-1391499.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt='cover image'
                    width={48}
                    height={48}
                    className=' w-16 h-16 -bottom-6 absolute left-0 right-0 m-auto object-cover  rounded-full ring-2 ring-white '
                />
            </div>


            {/* user information */}
            <div className=' flex  flex-col gap-2 items-center'>
                <span className='text-xl font-bold'>Surya Majhi</span>
                <div className='flex gap-3 items-center'>
                    {/* follwer's image */}
                    <div className="flex flex-row">
                        <Image
                            src="https://images.pexels.com/photos/7180792/pexels-photo-7180792.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="image"
                            width={10}
                            height={10}
                            className="w-6 h-6 ring-1 ring-white z-40 relative rounded-full object-cover"
                        />
                        <Image
                            src="https://images.pexels.com/photos/7180792/pexels-photo-7180792.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="image"
                            width={10}
                            height={10}
                            className="w-6 h-6 ring-1 ring-white z-30 relative rounded-full object-cover -ml-2"
                        />
                        <Image
                            src="https://images.pexels.com/photos/7180792/pexels-photo-7180792.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="image"
                            width={10}
                            height={10}
                            className="w-6 h-6 ring-1 ring-white z-20 relative rounded-full object-cover -ml-2"
                        />
                        <Image
                            src="https://images.pexels.com/photos/7180792/pexels-photo-7180792.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="image"
                            width={10}
                            height={10}
                            className="w-6 h-6 ring-1 ring-white   z-10 relative rounded-full object-cover -ml-2"
                        />
                    </div>

                    <span className='text-gray-500'>500 follwers</span>
                </div>

                {/* My profile button */}
                <span className='bg-blue-500 py-1 my-2 px-3 rounded-md cursor-pointer text-white'>My Porfile</span>
            </div>
        </div>
    )
}

export default ProfileCard