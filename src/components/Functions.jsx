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

const RoundButton = styled(BaseButton)`
    width: ${(props) => fixedHeight(props.size || 5)}px;
    height: ${(props) => fixedHeight(props.size || 5)}px;
    border-radius: 50%;
    background: #666;
    color: white;
    font
`;