import React from 'react'
import FriendRequestOption from './FriendRequestOption'
import Link from 'next/link'

function Friends() {
  return (
    <div className='bg-white p-4 rounded-lg text-sm shadow-md flex flex-col gap-4'>
        {/* top part */}
        <div className='flex justify-between'>
            <span className='font-medium text-gray-500'>Friends Request </span>
            <Link href='/' className='cursor-pointer text-blue-600'>See all</Link>
        </div>

        {/* bottom part */}
        <div className='flex flex-col gap-5'>
            <FriendRequestOption/>
            <FriendRequestOption/>
            <FriendRequestOption/>
           
        </div>
    </div>
  )
}

export default Friends