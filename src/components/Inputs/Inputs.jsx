import { motion } from "framer-motion";
import styled from "styled-components";
import { useEffect, useState } from "react";

const Input = ({ className, placeholder, h, w }) => {
  const [sizedWidth, setSizedWidth] = useState(0);
  const [sizedHeight, setSizedHeight] = useState(0);

  const setDimensions = () => {
    w ? setSizedWidth((w / 100) * window.innerWidth) : setSizedWidth(0);
    h ? setSizedHeight((h / 100) * window.innerHeight) : setSizedHeight(0);
  };

  useEffect(() => {
    setDimensions();
  }, [h, w]);

  return (
    <motion.input
      className={className}
      placeholder={placeholder}
      type="text"
      style={{
        width: sizedWidth,
        height: sizedHeight,
      }}
    />
  );
};

const BaseInput = styled(Input)`
  border: 1px solid silver;
`;

export const OneInput = styled(BaseInput)`
  background: gold;
`;
