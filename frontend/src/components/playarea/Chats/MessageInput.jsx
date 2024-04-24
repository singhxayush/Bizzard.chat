import React from 'react'
import { IoSend } from "react-icons/io5";

const MessageInput = () => {
  return (
    <form className='px-4 my-3'>
        <div className='w-full relative'>
            <input
                type='text'
                className='border text-sm rounded-lg block w-full p-2.5  bg-gray-700 border-gray-600 text-white'
                placeholder='Send a message'
                // value={message}
                // onChange={(e) => setMessage(e.target.value)}
                />
            <button type='submit' width='9' className='p-4 bg-blue-600 hover:bg-blue-700 rounded-lg absolute inset-y-0 end-0 flex items-center pe-3'>
                <IoSend />
            </button>
        </div>
    </form>
  )
}

export default MessageInput
