import Folder from './Folder.jsx'
import {motion} from 'framer-motion'

const Thrash = () => {
  return (
    <motion.div className='flex w-full h-fit flex-1 flex-wrap'
      key={'Top Projects'}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3 }} >
      <Folder link='#' appName='Brawl API' />
    </motion.div>
  )
}

export default Thrash;
