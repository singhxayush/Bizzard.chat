import React from 'react'
import { RiSettings5Fill } from "react-icons/ri";

const SettingsButton = () => {
  return (
    <div className="tooltip tooltip-top" data-tip="logout">
      <RiSettings5Fill className="w-8 h-8"/>
    </div>
  )
}

export default SettingsButton
