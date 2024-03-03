import React from 'react'
import { Link } from 'react-router-dom'
import img from '../../assets/images/projects/it_solutions.png'
import { FaGithub } from "react-icons/fa";

const FeaturedProject = ({type,title,link,summary,img,github}) => {
  return (
    <div className='w-full flex items-center justify-between  rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12
    relative rounded-br-2xl lg:flex-col lg:p-8 xs:rounded-2xl xs-rounded-br-3xl xs:p-4'>
        <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark 
            rounded-br-3xl'/>

        <a href={link} target='_blank' className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full'>
            <img src={img} alt={title} className='w-full h-auto'/>
        </a>

        <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
            <span className='text-primary font-medium text-2xl xs:text-base'>{type}</span>

            <a href={link} target='_blank' className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-4xl font-bold sm:text-2xl'>{title}</h2>
            </a>

            <p className='my-2 font-medium text-dark sm:text-sm'>{summary}</p>

            <div className='mt-2 flex items-center justify-between'>
                    <a to={github} target='_blank' className='w-10 cursor-pointer'><FaGithub className='text-4xl'/></a>
                    <a to={link} target='_blank' className='ml-4 rounded-lg
                    bg-dark p-2 px-6 text-light font-semibold cursor-pointer'>
                        Visit Project
                    </a>
            </div>
        </div>
    </div>
  )
}

export default FeaturedProject