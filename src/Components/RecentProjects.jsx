import React from 'react'
import { motion } from 'framer-motion';
import Folder from './Folder.jsx'

const RecentProjects = () => {
  return (
    <motion.div className='flex w-full h-fit flex-1 flex-wrap'
      key={'Recent Projects'}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3 }}>
      <Folder link='https://ac-calculator-02.netlify.app/' appName='AC Calculator' />
      <Folder link='https://github.com/SuspiciousDude/DSA-Quest' appName='DSA Quest' />
      <Folder link='https://github.com/SuspiciousDude/Pokemon-Explore' appName='Pokémon Explore' />
      <Folder link='https://github.com/SuspiciousDude/CSV-to-SQL-conversion' appName='CSV to SQL' />
    </motion.div>
  )
}

export default RecentProjects;
