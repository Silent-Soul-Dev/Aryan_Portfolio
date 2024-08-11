import React from 'react'
import { motion } from 'framer-motion';
import TextFolder from './TextFolder.jsx'

const Introduction = () => {
  return (
    <motion.div className='flex w-full h-fit flex-1 flex-wrap'
      key={'Introduction'}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3 }}>
      <TextFolder link='#' appName='intro.txt' />
      <TextFolder link='#' appName='education.txt' />
      <TextFolder link='#' appName='experience.txt' />
    </motion.div>
  )
}

export default Introduction;
