import React from 'react'
import Friends from './Friends'
import Events from './Events'
import Ads from './Ads'
import UserInformation from './UserInformation'
import UserMedia from './UserMedia'

export const RightMenu = ({userId}:{userId?:string}) => {
  return (
    <div className='flex flex-col gap-7'>
        
        {userId? (
            <>
            <UserInformation userId={userId}/>
            <UserMedia userId={userId}/>
            </>
        ):null}
        <Friends/>
        <Events/>
        <Ads size='lg'/>
    </div>
  )
}
