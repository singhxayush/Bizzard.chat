import React from 'react'
import { FaSearch } from "react-icons/fa";

const SearchInput = () => {
  return (
    <form className='flex items-center gap-4'>
      <input type='text' placeholder='Search' className='input w-full input-bordered rounded-2xl' />
      <button type='submit' className='btn btn-circle bg-slate-900 text-gray-300'>
        <FaSearch className='w-5 h-5'/>
			</button>
    </form>
  )
}

export default SearchInput
