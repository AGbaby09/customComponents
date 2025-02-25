import { useState } from "react";
import styled from "styled-components";
import GridList from "./Grid/GridList";
import RelBox from "./RelBox/RelBox";
import SizedBox from "./SizedBox/SizedBox";
import Par from "./Text/Par";
import Txt1 from "./Text/Txt1";
import Txt2 from "./Text/Txt2";
import Txt3 from "./Text/Txt3";
import { motion } from "framer-motion";
import { BigButton } from "./Buttons/Buttons";
import { OneInput } from "./Inputs/Inputs";
import { MenuComponent } from "./Widgets/Menu";
import { Contact1 } from "./Widgets/NewContact";
import { ResDev } from "./Widgets/ResDev";

const Home = () => {
  return (
    <RelBox w={100} h={100} className={"center"}>
      {/* <Contact1 /> */}
      <ResDev className={"borderR"} max={{ w: 30, h: 40 }}>
        <RelBox className={"borderG"} w={50} h={50}></RelBox>
      </ResDev>
    </RelBox>
  );
};

export default Home;

{
  // the MenuComponent
  /* <MenuComponent
        data={[
          {
            name: "Home",
            path: "",
          },
          {
            name: "About",
            path: "",
          },
          {
            name: "Services",
            path: "",
          },
          {
            name: "Books",
            path: "",
          },
          {
            name: "Account",
            path: "",
          },
          {
            name: "Logout",
            path: "",
          },
        ]}
      /> */
}
