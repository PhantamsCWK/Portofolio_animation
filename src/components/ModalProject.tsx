import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { projects } from '../constants';
import { BiX } from "react-icons/bi";
import { AiOutlineCheck, AiOutlineFieldTime, AiOutlineGithub, AiOutlineHourglass } from 'react-icons/ai';

type ProjectItem = {
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
}

type ModalProjectType = {
  setProjectId: React.Dispatch<React.SetStateAction<string>>,
  projectId: string
}

const ModalProject = ({ setProjectId, projectId }: ModalProjectType) => {
    const [data, setData] = useState<ProjectItem>();

    const findData = () => { 
        const data = projects.find(p => p.id === projectId);
        setData(data)
    }

    const handleClose = () => {
      setProjectId("")
      // document.body.classList.remove("overflow-hidden");
    }

    useEffect(() => {
        findData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [projectId]);

  return (
    data && (
        <div className="px-5 fixed h-full w-full flex items-center justify-center top-0 left-0 z-50 bg-tertiary bg-opacity-50 overflow-y-hidden " id='modal-project' onClick={() => handleClose()}>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1
            }}
            exit={{
              y: -50,
              opacity: 0
            }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            className="absolute p-5 bg-primary h-auto rounded-3xl text-white"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleClose}
              className="absolute top-0 right-0 -mt-4 -mr-4"
            >
              <BiX size={50} color='#aaa6c3'/>
            </button>
            <div className='flex flex-col items-center w-[20rem] sm:w-[34rem]'>
                <img src={data.image} alt={data.name} className='max-h-52 sm:max-h-72 rounded-3xl mb-5'/>
                <div className='flex justify-between items-center w-full mb-3'>
                  <span className='text-4xl'>
                    {data.name}
                  </span>
                  <div
                    className='black-gradient w-10 h-10 rounded-full flex justify-center items-center'
                  >
                    <span>
                      {
                        data.status === "done" ? (<AiOutlineCheck size={20} color='98D8AA' />) :
                        data.status === "on progress" ? (<AiOutlineHourglass size={20} color='F3E99F' />) :
                        data.status === "soon" ? (<AiOutlineFieldTime size={20} color='F3E99F' />) :
                        <></>
                      }
                    </span>
                  </div>
                </div>
                <div className='mb-3 flex flex-wrap gap-2 w-full'>
                  {data.tags.map((tag) => (
                    <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                      {tag.name}
                    </p>
                  ))}
                </div>
                <div className='text-sm sm:text-base sm:w-[35rem]'>{data.description}</div>
                <a href={data.source_code_link} target='blank' className='mt-4'><AiOutlineGithub size={30} /></a>
                
            </div>
          </motion.div>
          {/* <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1
            }}
            exit={{
              opacity: 0
            }}
            transition={{ type: "spring", bounce: 0, duration: 0.2 }}
            onClick={handleClose}
            className="bg-transparent px-5 fixed h-full w-full flex items-center justify-center top-0 left-0"
          /> */}
    </div>
    )
  )
}

export default ModalProject