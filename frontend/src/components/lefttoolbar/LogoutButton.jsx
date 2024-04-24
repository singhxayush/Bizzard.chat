import React from 'react'
import { RiLogoutCircleLine } from "react-icons/ri";

const LogoutButton = () => {
  return (
    <div className="tooltip tooltip-top z-10" data-tip="logout">
      <RiLogoutCircleLine className="w-8 h-8" />
    </div>
  )
}

export default LogoutButton
