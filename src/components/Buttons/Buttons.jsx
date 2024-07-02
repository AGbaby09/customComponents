import { motion } from "framer-motion";
import styled from "styled-components";

const Button = ({ children, className, onClick }) => {
  
  return (
    <motion.button onClick={onClick} className={className} whileTap={{ scale: 0.95 }}>
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

export const BigButton = styled(BaseButton)`
  background: ${(props) => (props?.tapped ? "limegreen" : "red")};
  font-size: ${(2.5 / 100) * window.innerHeight}px;
  width: 20%;
  height: 10%;
  border-radius: 15px;

  @media only screen and (max-width: 768px) {
    background: ${(props) => (props?.tapped ? "goldenrod" : "aqua")};
    width: 100%
  }
`;

export const SmallButton = styled(BaseButton)`
background: goldenrod;
font-size: ${(1 / 100) * window.innerHeight}px;
width: 10%;
height: 5%;
border-radius: 10px;
`;


export const MedButton = styled(BaseButton)`
  background: teal;
  font-size: ${(1.75 / 100) * window.innerHeight}px;
  width: 15%;
  height: 7.5%;
  border-radius: 12.5px;
`;