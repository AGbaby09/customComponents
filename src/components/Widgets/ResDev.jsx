import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { fixedHeight, fixedWidth } from '../Functions';

const Base = ({ children, className, variants, initial, animate }) => {
    return (
      <motion.section
        variants={variants || ""}
        initial={initial || ""}
        animate={animate || ""}
        className={className || ""}
      >
        {children}
      </motion.section>
    );
};

export const ResDev = styled(Base)`
  width: ${(props) => fixedWidth(props?.max?.w || 0)}px;
  height: ${(props) => fixedHeight(props?.max?.h || 0)}px;
  isolation: isolate;
  overflow: hidden;

  @media only screen and (max-width: 768px) {
    width: ${(props) => fixedWidth(props?.min?.w || 0)}px;
    height: ${(props) => fixedHeight(props?.min?.h || 0)}px;
  }
`;

// const ResDev = ({ children, className, max, min }) => {
//     return <StyledBase className={className} max={max} min={min}>
//         {children}
//     </StyledBase>;
// };