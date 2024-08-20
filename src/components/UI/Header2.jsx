import React from 'react';
import { motion } from 'framer-motion';
import Video from './Video';

const Header2 = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="w-[98.7vw] h-[100vh]"
    >
      {/* Video Slider */}
      <Video />
    </motion.div>
  );
};

export default Header2;
