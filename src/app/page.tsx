import AddToPost from '@/components/AddToPost'
import { Feed } from '@/components/Feed'
import LeftMenu from '@/components/LeftMenu'
import { RightMenu } from '@/components/RightMenu'
import StoryPost from '@/components/StoryPost'
import React from 'react'

 const Homepage = () => {
  return (
    <div className='flex gap-6 pt-7'>
        {/* left part */}
        <div className='hidden md:block w-[20%]'>
            <LeftMenu type="homepage"/>
        </div>


        {/* center part(MainSection) or Mobile part*/}
        <div className=' w-full lg:w-[60%] xl:w-[40%]'>
            <StoryPost/>
            <AddToPost/>
            <Feed/>
        </div>


        {/* right  part */}
        <div className='hidden md:block w-[30%]'>
            <RightMenu/>
        </div>
    </div>
  )
}

export default Homepage
