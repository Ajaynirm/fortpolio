import React from 'react'
import Project from './Project'

const MultiProject = () => {
  return (
    <>
       <h1 style={{textAlign:"center", padding:"10px", fontWeight:"bold"}} className="text-bold text-red-400" id="project">Project</h1>
        <div className='flex justify-around flex-wrap'>
            <Project />
            <Project />
            <Project />
            <Project />
            
        </div>
    </>
  )
}

export default MultiProject