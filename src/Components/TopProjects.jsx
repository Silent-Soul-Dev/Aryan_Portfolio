import Folder from './Folder.jsx'
import {motion} from 'framer-motion'

const TopProjects = () => {
  return (
    <motion.div className='flex w-full h-fit flex-1 flex-wrap'
      key={'Top Projects'}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3 }} >
      <Folder link='https://ac-calculator-02.netlify.app/' appName='AC Calculator' />
      <Folder link='https://github.com/SuspiciousDude/DSA-Quest' appName='DSA Quest' />
      <Folder link='https://github.com/SuspiciousDude/Pokemon-Explore' appName='Pokémon Explore' />
    </motion.div>
  )
}

export default TopProjects;
