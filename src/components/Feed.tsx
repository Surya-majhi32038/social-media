import React from 'react'
import Post from './Post'

export const Feed = () => {
  return (
    <div className='bg-white flex flex-col rounded-lg gap-12 p-3'>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
    </div>
  )
}
