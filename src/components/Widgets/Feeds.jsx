import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { fixedHeight, fixedWidth } from '../Functions';

const Base = ({ children, className }) => {
return(
<motion.div className={className}>
{children}
</motion.div>
);
};

const StyledBase = styled(Base)``;

export const Feed1 = () => {
    
return (
<StyledBase>

</StyledBase>
);
};