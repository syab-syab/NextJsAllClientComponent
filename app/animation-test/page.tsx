// import React from 'react'
"use client"
import { motion } from "framer-motion"

const page = () => {
  return (
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <p>test</p>
      </motion.div>

  )
}

export default page