import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { fixedHeight, fixedWidth } from '../Functions';
import { NavLink } from 'react-router-dom';

const BaseList = ({ children, className }) => {
return(
<motion.ul className={className}>
{children}
</motion.ul>
);
};

const StyledBase = styled(BaseList)`
  width: 100%;
  height: auto;
  overflow: hidden;
  /* border: 1px solid teal; */

  & > li {
    transition: 1s ease;
    list-style: none;
    /* background-color: #eee; */
    width: 100%;
    height: ${fixedHeight(6)}px;
    font-size: ${fixedHeight(1.5)}px;
    overflow: hidden;

    & > div {
      width: 100%;
      height: 75%;
      border-radius: ${fixedHeight(1)}px;
      overflow: hidden;

      & > a {
        padding: 0 ${fixedHeight(1.5)}px;
        background-color: #fff4;
        text-decoration: none;
        color: #444;
        backdrop-filter: blur(${fixedHeight(1)}px);

        &:hover {
          background-color: #6668;
          color: #fff;
        }

        &.active {
          background-color: #2229;
          color: #fff;
        }

        & > i {
          font-size: ${fixedHeight(2)}px;
          margin-right: ${fixedHeight(1)}px;
        }
      }
    }
  }
`;

const Item = ({children, path}) => {
    return (
      <motion.li className="center">
        <motion.div whileTap={{ scale: 0.975 }} className="li-button center">
          <NavLink to={path || "#"} className="full al-c">
            {children}
          </NavLink>
        </motion.div>
      </motion.li>
    );
}

export const List = () => {
return (
  <StyledBase>
    <Item path={"/home/dashboard"}>
      <i className="bx bxs-dashboard"></i> Dashboard
    </Item>
    <Item path={"/home/timeline"}>
      <i className="bx bxs-card"></i> Timeline
    </Item>
    <Item path={"/home/one"}>
      <i className="bx bxs-pie-chart-alt-2"></i>Analytics
    </Item>
    <Item path={"/home/one"}>
      <i className="bx bx-support"></i>Support
    </Item>
    <Item path={"/home/one"}>
      <i className="bx bx-cog"></i>Settings
    </Item>
  </StyledBase>
);
};