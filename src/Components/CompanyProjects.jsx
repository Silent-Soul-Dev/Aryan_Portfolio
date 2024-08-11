import React from 'react'
import {motion} from 'framer-motion'
import Folder from './Folder.jsx'

const CompanyProjects = () => {
  return (
    <motion.div className='flex w-full h-fit flex-1 flex-wrap'
      key={"Company Projects"}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3 }}>
      <Folder link='#' appName='SynoPDF' />
      <Folder link='#' appName='OneVarsity' />
    </motion.div>
  )
}

export default CompanyProjects
