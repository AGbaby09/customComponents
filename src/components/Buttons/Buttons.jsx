import { motion } from "framer-motion";
import styled from "styled-components";
import { fixedHeight } from "../Functions";

const Button = ({ children, className, onClick }) => {
  return (
    <motion.button
      onClick={onClick}
      className={className}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  );
};

const BaseButton = styled(Button)`
  z-index: 5;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-weight: 600;
`;

export const RoundButton = styled(Button)`
  height: ${(props) => props?.size ? fixedHeight(props?.size) : fixedHeight(5)}px;
  width: ${(props) => props?.size ? fixedHeight(props?.size) : fixedHeight(5)}px;
  border-radius: 50%;
`;

export const BigButton = styled(BaseButton)`
  background: ${(props) => (props?.tapped ? "limegreen" : "red")};
  font-size: ${(2.5 / 100) * window.innerHeight}px;
  width: 20%;
  height: 10%;
  border-radius: 15px;

  @media only screen and (max-width: 768px) {
    background: ${(props) => (props?.tapped ? "goldenrod" : "aqua")};
    width: 100%;
  }
`;
