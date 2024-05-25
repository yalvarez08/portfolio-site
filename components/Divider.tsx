"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Divider() {
  return (<>
    <motion.div className="flex flex-col my-24 sm:flex-row gap-8">
      <motion.p className="bg-gray-400 h-5 w-5 rounded-full sm:block dark:bg-opacity-20"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.125 }}></motion.p>
    <motion.p className="bg-gray-400 h-5 w-5 rounded-full sm:block dark:bg-opacity-20"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.125 }}></motion.p>
    <motion.p className="bg-gray-400 h-5 w-5 rounded-full sm:block dark:bg-opacity-20"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.125 }}></motion.p>
  </motion.div>
  </>);
}