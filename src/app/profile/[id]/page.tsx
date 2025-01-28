import { Feed } from '@/components/Feed'
import LeftMenu from '@/components/LeftMenu'
import { RightMenu } from '@/components/RightMenu'
import React from 'react'

const ProfilePage = () => {
  return (
    <div className='flex gap-6 pt-7'>
    {/* left part */}
    <div className='hidden md:block w-[30%]'>
        <LeftMenu/>
    </div>


    {/* center part(MainSection) or Mobile part*/}
    <div className=' w-full lg:w-[70%] xl:w-[50%]'>
        <Feed/>
    </div>


    {/* right  part */}
    <div className='hidden md:block w-[40%]'>
        <RightMenu userId={"textcase"}/>
    </div>
    </div>
  )
}

export default ProfilePage