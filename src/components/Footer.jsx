import { motion } from 'framer-motion'
import React from 'react'
import { staggerChildren } from '../utils/motion'

function Footer() {
  return (
    <motion.footer
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className='bg-white pt-6 mt-7'>
      <div className="container m-auto p-4 flex sm:justify-between justify-start gap-4 c-primary sm:flex-row flex-col">
    <div className="left">
      <h6 className='text-3xl  mb-6'>Let's make something <br/> amazing together.</h6>
      <p className='text-2xl'>Start by <a className='c-yellow underline ' href="mailto:example@gmail.com?">Saying hi</a></p>
    </div>
    <div className="right">
      <div className="info">
        <span className='font-bold mb-2 block'>Information</span>
        <p className='mb-4'>123 New York, DC 0123, USA</p>
      </div>
      <ul className="menu list-none flex flex-col gap-4">
        <li className='hover:c-secondary'><a href="#">Services</a></li>
        <li className='hover:c-secondary'><a href="#">Works</a></li>
        <li className='hover:c-secondary'><a href="#">Notes</a></li>
        <li className='hover:c-secondary'><a href="#">Experience</a></li>
      </ul>
    </div>
      </div>
      <p className='text-center text-sm c-primary p-4 bg-primary'>Thanks to <a href="https://www.youtube.com/@ZAINKEEPSCODE" className='underline c-yellow'>@ZAINKEEPSCODE</a> for the tutorial <br/> Developed by <a href="https://www.github.com/noamangg" className='underline font-bold'>Noaman Grewatiy</a></p>
    </motion.footer>
  )
}

export default Footer