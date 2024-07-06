import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { fixedHeight, fixedWidth } from "../Functions";
import { ResDev } from "./ResDev";
import { List } from "./List";

const BaseNav = ({ children, className }) => {
  return <motion.nav className={className}>{children}</motion.nav>;
};

const StyledNav = styled(BaseNav)`
  /* border: 1px solid silver; */
  padding: 0 ${fixedWidth(1.5)}px;

  & .top{
    /* border: 1px solid gold; */
    height: 11%;
    color: #fff8;
    
    & h4{
            font-size: ${fixedHeight(2.25)}px;
        }
    & i{
            font-size: ${fixedHeight(3.5)}px;
        }
  }
`;

export const Nav1 = () => {
  return (
    <ResDev max={{ w: 15, h: 100 }} className={""}>
      <StyledNav className={"full"}>
              <div className="top al-c">
                  <i className="bx bxs-carousel"></i>
                  <h4>CComponents</h4>
              </div>
              <List />
      </StyledNav>
    </ResDev>
  );
};
