import {  motion,AnimatePresence } from 'framer-motion'
import React from 'react'
import Social from './Social'

const Member = ({mydata}) => {
  return (
    <div>
      <AnimatePresence>
        {mydata?.isVisible && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 bg-white bg-opacity-90 flex items-center justify-center z-50"
          >
            <div className="flex h-screen w-full text-black text-3xl text-center">
              <div className='h-screen w-1/2 border-2 items-start justify-center flex flex-col'>
                <p>{mydata?.designation}</p>
                <h4>{mydata?.name}</h4>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                <div>
                  <Social />
                </div>
              </div>
              <div className='h-screen w-1/2 border-2'>

              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Member
