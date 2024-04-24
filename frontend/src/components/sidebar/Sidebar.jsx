import React from 'react'
import Conversations from './Conversations'
import SearchInput from './SearchInput'

const Sidebar = () => {
  return (
    <div className='flex flex-1 flex-col p-2 md:w-[360px] md:min-w-[400px] sm:min-w-[100px]'>

      <SearchInput />

      <div className='divider my-2'></div>

      <Conversations />

    </div>
  )
}

export default Sidebar