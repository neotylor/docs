import { FaRegFileAlt } from 'react-icons/fa'
import { IoClose } from 'react-icons/io5'
import { LuDownload } from 'react-icons/lu'
import { motion } from "framer-motion"

export type dataSchema = {
  id: string,
  desc: string,
  fileSize: string,
  close: boolean,
  tag: {
    isOpen: boolean,
    title: string,
    bgColor: string
  },
  reference: any
}

const Card = ( props : dataSchema ) => {
  const { desc, fileSize, close, tag: { isOpen, title, bgColor }, reference } = props;
  return (
    <motion.div 
      drag
      dragConstraints={reference}
      whileDrag={{scale: 1.1}}
      dragElastic={0.2}
      dragTransition={{
        bounceStiffness: 100,
        bounceDamping: 30
      }}
      className="relative w-60 h-72 rounded-[45px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden flex-shrink-0">
      <FaRegFileAlt />
      <p className="text-sm leading-tight mt-5 font-semibold">{desc}</p>
      <div className="footer absolute left-0 bottom-0 w-full">
        <div className="flex item-center justify-between px-8 py-3 md-5">
          <h5>{fileSize}</h5>          
          <span className="w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center">
            { close ? <IoClose /> : <LuDownload size=".7em" color='#fff' /> }
          </span>
        </div>
        { isOpen && <div className={`tag w-full py-4 ${bgColor === 'green'? 'bg-green-600': 'bg-blue-600'} flex items-center justify-center`}>
          <h3 className="text-sm font-semibold">{title}</h3>
        </div> }
      </div>
    </motion.div>
  )
}

export default Card