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
        <p className="animation-test">アニメーションのテスト</p>
      </motion.div>

  )
}

export default page