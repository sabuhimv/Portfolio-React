import React from 'react'
import { Link } from 'react-router-dom'
import { FaGithub } from "react-icons/fa";

const Project = ({ type, title, img, link, github }) => {
  return (
    <div className='flex flex-col items-center justify-center 
    rounded-2xl border border-solid border-dark bg-light p-6 relative xs:p-4'>
        <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem]
             bg-dark rounded-br-3xl md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]'/>

        <a href={link} target='_blank' className='w-full cursor-pointer overflow-hidden rounded-lg ' >
                <img src={img} alt={title} className='w-full h-auto'
                    priority
                    sizes="(max-width: 768px) 100vw,
                    (max-width:1200px) 50vw, 
                    33vw"
                />
            </a>

            <div className='w-full flex flex-col items-start justify-between mt-4'>
                <span className='text-primary font-medium text-2xl'>{type}</span>

                <a href={link} target='_blank' className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-3xl font-bold lg:text-2xl'>{title}</h2>
                </a>

                <div className='w-full mt-2 flex items-center justify-between'>
                    <a href={link}
                        target='_blank'
                        className='text-lg font-semibold underline md:text-base'
                    >
                        Visit
                    </a>

                    <a href={github} target='_blank' className= 'text-3xl'>
                        <FaGithub />{" "}
                    </a>
                </div>
            </div>
    </div>
  )
}

export default Project