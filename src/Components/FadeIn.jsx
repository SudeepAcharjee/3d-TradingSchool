import React from 'react'
import { motion } from 'framer-motion'

const FadeIn = ( {children} ) => {
  return (
    <motion.group
    animate={{
        opacity: 1
    }}
    initial={{
        opacity: 0
    }}
    transition={{
        delay: 10,
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      }}
    >
        {children}
    </motion.group>
  )
}

export default FadeIn