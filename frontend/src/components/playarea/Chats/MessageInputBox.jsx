import React from 'react';
import { 
  IoAddCircleOutline, IoAttach, IoCamera, IoHappy, IoSend, 
  IoText, IoMic, IoLink, IoCodeWorking, IoList, IoMusicalNotes 
} from 'react-icons/io5';

const MessageInputBox = () => {
  return (
    <div className="flex flex-col p-2 m-2 mt-3 bg-gray-700 rounded-b-lg border-white selection:border-gray-300">
      {/* Top row for extra functionality */}
      <div className="flex justify-between">
        <div className="flex gap-2">
          <IoAddCircleOutline className="text-gray-300 hover:text-white cursor-pointer w-5 h-5" />
          <IoCamera className="text-gray-300 hover:text-white cursor-pointer w-5 h-5" />
          <IoMusicalNotes className="text-gray-300 hover:text-white cursor-pointer w-5 h-5" />
          <IoCodeWorking className="text-gray-300 hover:text-white cursor-pointer w-5 h-5" />
        </div>
        <div className="flex space-x-2">
          {/* <IoList className="text-gray-300 hover:text-white cursor-pointer" /> */}
          Add more icons as needed
        </div>
      </div>

      <div className='divider -m-1' />

      {/* Bottom row for message input */}
      <div className="flex items-center space-x-2">
        {/* <IoText className="text-gray-300 hover:text-white cursor-pointer" /> */}
        <input
          type="text"
          placeholder='Message here'
          className="flex-1 bg-transparent text-white outline-none placeholder-gray-400"
        />
        <IoAttach className="text-gray-300 hover:text-white cursor-pointer w-5 h-5" />
        <IoLink className="text-gray-300 hover:text-white cursor-pointer w-5 h-5" />
        <IoHappy className="text-gray-300 hover:text-white cursor-pointer w-5 h-5" />
        <IoMic className="text-gray-300 hover:text-white cursor-pointer w-5 h-5" />
        <button className="p-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white flex items-center justify-center">
          <IoSend />
        </button>
      </div>
    </div>
  );
};

export default MessageInputBox;