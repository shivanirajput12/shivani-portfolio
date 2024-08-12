
import React from "react";

import Footer from './Footer'

const ProjectCard = ({  title, description, technologies }) => {
    return (
        <div className="max-w-sm sm:max-w-sm md:max-w-sm bg-gray-900 border border-neutral-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            {title=='Data Migration UI'}
            {title =='REX-Replatform' }
            {title =='Video Streaming Platform' }

            <div className="p-4 sm:p-6">
                <a href="#">
                    <h5 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-500">{title}</h5>
                </a>
                <p className="font-normal text-sm sm:text-base md:text-lg text-gray-300 dark:text-gray-400">{description}</p>
            </div>
            <div className='m-2 sm:m-4 lg:m-6 flex justify-between'>
                <div className='flex flex-wrap gap-2 pl-2'>
                    {technologies.map((tag, index) => (
                        <p
                            key={`${index}-${tag}`}
                            className='text-[14px] text-blue-500'
                        >
                            #{tag}
                        </p>
                    ))}
                </div>
                
            </div>
        </div>
    );
};
  
const Projects = () => {
    return (
        <div className="bg-black">
            <div className="flex flex-wrap gap-7 justify-center items-center m-12 p-12">
                {project.map((item, index) => (
                    <ProjectCard
                        key={index}
                        title={item.title}
                        description={item.description}
                        links={item.links}
                      
                        technologies={item.technologies}
                    />
                ))}
            </div>
            <Footer/>
        </div>
    );
}


export const project = [
    {
        title:'Data Migration UI',
        description:' The New Vision DM Utility tool is utilized to ensure the accuracy, transformation, and loading of legacy system data into the C2M Database. Through this tool, users can access and retrieve exception reports and summary reports detailing the validation, transformation, and loading phases. This tool streamlines the migration process, providing insights and controls to effectively manage data transfer from legacy systems to the C2M Database.',
  
        technologies:['HTML', 'CSS', 'JAVASCRIPT', 'BOOTSTRAP']
    },
    {
        title:'REX-Replatform',
        description:' Tyler has a project written in VBScript that needs to be converted to JavaScript. They possess their own conversion tool for this purpose. Our responsibility is to debug all the converted code and rectify any errors present. The task entails ensuring the functionality and correctness of the JavaScript code post-conversion.',
       
       
        technologies:[ 'HTML', 'CSS', 'JAVASCRIPT']
    },
    {
        title:'Video Streaming Platform',
        description:'• Developed a high-performance, scalable video streaming platform using React. Implemented robust search functionality with debouncing and caching using Redux store. Designed responsive UI with dark and light color themes. Enhanced user experience with shimmer effects and lazy loading. Integrated Firebase APIs for user authentication.Built a fast and reliable application with a focus on scalability and performance.',
        
        technologies:[  'ReactJs', 'Tailwind Css', 'Redux', 'Jest', 'Firebase', 'Shimmer UI'
        ]
    },
]

export default Projects