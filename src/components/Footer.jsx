import React from 'react'

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark
    font-medium text-lg my-container flex justify-between items-center lg:flex-col lg:text-center sm:text-sm xs:text-xs'> 
      <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div className='flex items-center py-2'>
        Code With <span className='text-primary text-2xl px-1'>&#9825;</span> 
        <span className='underline underline-offset-2'>SabuhiMv</span>
        </div>
    </footer>
  )
}

export default Footer