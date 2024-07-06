import { motion } from "framer-motion";
import styled from "styled-components";

export const fixedHeight = (height) => {
    return ((height/100)*window.innerHeight)
}
export const fixedWidth = (width) => {
    return ((width/100)*window.innerWidth)
}

const BaseButton = ({ children, className, onClick }) => {
  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      className={className}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
};

export const RoundButton = styled(BaseButton)`
    width: ${(props) => fixedHeight(props.size || 5)}px;
    height: ${(props) => fixedHeight(props.size || 5)}px;
    border-radius: 50%;
    background: #666;
    color: white;
    isolation: isolate;
    overflow: hidden;
`;

export const PillButton = styled(BaseButton)`
  border-radius: ${(props) => fixedHeight(props.radius || 0.5)}px;
  padding: 0 ${(props) => fixedHeight(props.gap || 2)}px;
  width: auto;
  height: 80%;
  background-color: #444;
  color: #fff;
`;

export const compMotion = {
  container: {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        type: "tween",
        delayChildren: 0,
        ease: "easeInOut", // Added ease
        duration: 0.5, // Added duration
        staggerChildren: 0.1,
      },
    },
  },
  item: {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
    },
    transition: { duration: 0.5 },
  },
};