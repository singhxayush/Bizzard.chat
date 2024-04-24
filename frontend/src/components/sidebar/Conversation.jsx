import React from 'react'
/* 
    (pic |     )
*/
const Conversation = () => {
  return (
    <>
        <div className='flex gap-4 items-center hover:bg-white hover:bg-opacity-10 rounded-lg p-2 py-1 cursor-pointer'>

            <div className='avatar online'>
                <div className='w-12 rounded-full'>
                    <img src='https://avatar.iran.liara.run/public/boy?username=ayush' alt='user avatar' />
                </div>
            </div>

            <div className='flex flex-col flex-1'>
                <div className='flex gap-3 justify-between'>
                    <p className='font-semibold text-slate-200'>Jon Doe</p>
                    {/* <span className='text-xl'>🌱</span> */}
                </div>
            </div>

        </div>

        <div className='divider my-0 h-1 opacity-50' />
    </>
  )
}

export default Conversation
