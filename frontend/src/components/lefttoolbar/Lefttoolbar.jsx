import React from 'react'
import SettingsButton from './SettingsButton'
import LogoutButton from './LogoutButton'

const Lefttoolbar = () => {

  return (
    <div className='flex flex-1 flex-col gap-5 items-center pt-4'>
      <SettingsButton />
      <LogoutButton />
    </div>
  )
}

export default Lefttoolbar
