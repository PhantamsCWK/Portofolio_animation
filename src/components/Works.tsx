/* eslint-disable react-refresh/only-export-components */
import React, { useState } from 'react'
import { Tilt } from 'react-tilt'
import { AnimatePresence, motion } from 'framer-motion'
import { AiOutlineCheck, AiOutlineHourglass, AiOutlineFieldTime, AiOutlineGithub } from "react-icons/ai"

import { styles } from '../styles'
import { SectionWrapper } from '../hoc'
import { projects } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import ModalProject from './ModalProject'

interface Project {
  index: number,
  id: string,
  name: string,
  description: string,
  tags: {
    name: string,
    color: string
  }[],
  image: string,
  source_code_link: string,
  status: string,
  setProjectId: React.Dispatch<React.SetStateAction<string>>
}


const ProjectCard = ({ index, id, name, tags, image, source_code_link, status, setProjectId }: Project) => {
  const handleOpenModal = () => {
    setProjectId(id)
    // document.body.classList.add("overflow-hidden");
  }
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5 ,0.75)} onClick={handleOpenModal}>
      <Tilt
      options={{ 
        max: 45,
        scale: 1,
        speed: 450
       }}
       className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full cursor-pointer'
      >
        <div className='relative w-full h-[230px]'>
          <img src={image} alt={name} className='w-full h-full object-cover rounded-2xl'/>
          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <span>
                {
                  status === "done" ? (<AiOutlineCheck size={20} color='98D8AA' />) :
                  status === "on progress" ? (<AiOutlineHourglass size={20} color='F3E99F' />) :
                  status === "soon" ? (<AiOutlineFieldTime size={20} color='F3E99F' />) :
                  <></>
                }
              </span>
            </div>

            <div
              onClick={() => window.open(source_code_link, '_blank')}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <AiOutlineGithub size={20} />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag, i) => {
            if(i >= 4){
              return;
            }
            return (
              <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                {tag.name}
              </p>
            )
          })}
        </div>
      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  const [ projectId, setProjectId ] = useState<string>("");

  return (
    <>
      <motion.div variants={textVariant(0)}>
        <p className={styles.sectionSubText}>My Works</p>
        <h2 className={styles.sectionHeadText}>Project</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          while I was studying programming I also made several projects with the knowledge I got from learning several technologies
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, i) => (
          <ProjectCard 
            key={project.id}
            index={i}
            {...project}
            setProjectId={setProjectId}
          />
        ))}

      </div>

      <AnimatePresence>
        {projectId && (
          <ModalProject setProjectId={setProjectId} projectId={projectId} />
        )}
      </AnimatePresence>
    </>
  )
}

export default SectionWrapper(Works, "works");