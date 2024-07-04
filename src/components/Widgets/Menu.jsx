import { motion } from "framer-motion";
import styled from "styled-components";
import RelBox from "../RelBox/RelBox";
import { RoundButton } from "../Buttons/Buttons";
import { fixedHeight, fixedWidth } from "../Functions";
import Par from "../Text/Par";
import { useState } from "react";

const MenuCard = styled.aside`
  width: ${fixedWidth(14)}px;
  padding: 0 ${fixedWidth(1)}px;
  height: auto;
  box-shadow: -1px 2px 7.5px 1px #6662;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  isolation: isolate;
  transition: 500ms ease;

  @media only screen and (max-width: 768px) {
    width: ${fixedWidth(65)}px;
    padding: 0 ${fixedWidth(4.5)}px;
  }
`;

const MenuTitle = styled.div`
  height: ${fixedHeight(9)}px;
  width: 100%;
  //   background: teal;
  //   border: 1px solid red;
`;

const MenuList = styled.ul`
  width: 100%;
  height: auto;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: 500ms ease;
  //   background: aqua;
  margin-bottom: ${(props) => (props?.active ? fixedHeight(1.8) : 0)}px;
`;
const MenuItem = styled.li`
  width: 100%;
  visibility: ${(props) => (props?.active ? "visible" : "hidden")};
  height: ${(props) => (props?.active ? fixedHeight(6) : 0)}px;
  text-style: none;
  overflow: hidden;
  transition: height 500ms ease;

  @media only screen and (max-width: 768px) {
    height: ${(props) => (props?.active ? fixedHeight(6.25) : 0)}px;
  }
`;

const mL = ({ children, className, href }) => {
  return (
    <motion.a whileTap={{ scale: 0.95 }} href={href} className={className}>
      {children}
    </motion.a>
  );
};

const MenuLink = styled(mL)`
  width: 100%;
  height: 90%;
  background: #666;
  position: absolute;
  color: white;
  text-decoration: none;
  padding: 0% ${fixedHeight(1.7)}px;
  border-radius: ${fixedHeight(1.5)}px;
  font-size: ${fixedHeight(1.75)}px;
`;

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

const MenuIcon = styled(BaseButton)`
  width: ${(props) => fixedHeight(props.size || 5)}px;
  height: ${(props) => fixedHeight(props.size || 5)}px;
  border-radius: 50%;
  background: #666;
  color: white;
  font-size: ${fixedHeight(3.5)}px;
`;

const T1 = styled.p`
  font-size: ${fixedHeight(2)}px;
`;
const p1 = styled.p`
  font-size: ${fixedHeight(1.5)}px;
`;

export const MenuComponent = ({data}) => {
  const [active, setActive] = useState(false);

  return (
    <MenuCard className="center">
      <MenuTitle className="spBtn">
        <T1>The Menu</T1>
        <MenuIcon
          onClick={() => {
            setActive(!active);
          }}
          size={6}
        >
          {active ? <i className="bx bx-x"></i> : <i className="bx bx-menu"></i>}
        </MenuIcon>
      </MenuTitle>
      <MenuList active={active}>
        {data &&
          data.map((item, index) => (
            <MenuItem active={active ? active : undefined} className="center">
              <MenuLink href="#" className="al-c">
                {item.name}
              </MenuLink>
            </MenuItem>
          ))}
      </MenuList>
    </MenuCard>
  );
};
