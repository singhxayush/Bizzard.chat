import React from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'
import Header from './Header'
import MessageInputBox from './MessageInputBox'

const MessageContainer = () => {
  return (
    <div className='flex flex-1 flex-col justify-end'>
      <Header />
      <Messages />
      <MessageInput />
      {/* <MessageInputBox /> */}
    </div>
  )
}

export default MessageContainer

