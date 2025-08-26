import { motion } from "framer-motion"




type ProjectTypes = {
  title: string,
  image: string,
  link: string
  index: number
}


  
export default function SitesCard({title, image, link, index}: ProjectTypes) {
    return (


          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 1.25, delay: .12 * index }}
            className="bg-violet-400 p-4 flex flex-col gap-2 rounded-2xl transition-all hover:-translate-y-2 duration-300 animate-fade-in"
          >
            <h2 className='text-2xl font-semibold'>{title}</h2>
            <a href={link} target="_blank" rel="noopener noreferrer" className="hover:cursor-pointer text flex justify-center">
              <img src={image} alt={title} />
            </a>
              <a className='underline hover:no-underline hover:cursor-pointer' href={link} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
          </motion.div>

    );
  }
  