import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { fixedHeight, fixedWidth } from '../Functions';

const Base = ({ children, className }) => {
    return(
        <motion.section className={className}>
            {children}
        </motion.section>
    );
};

const StyledBase = styled(Base)`
  width: ${(props) => fixedWidth(props?.max?.w)}px;
  height: ${(props) => fixedHeight(props?.max?.h)}px;

  @media only screen and (max-width: 768px) {
    width: ${(props) => fixedWidth(props?.min?.w)}px;
    height: ${(props) => fixedHeight(props?.min?.h)}px;
  }
`;

export const ResDev = ({ children, className, max, min }) => {
    return <StyledBase className={className} max={max} min={min}>
        {children}
    </StyledBase>;
    
};