import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { fixedHeight, fixedWidth, RoundButton } from "../Functions";
import { ResDev } from "./ResDev";

const Base = ({ children, className, variants, initial, animate }) => {
  return (
    <motion.div
      variants={variants || ""}
      initial={initial || ""}
      animate={animate || ""}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const StyledBase = styled(Base)`
  box-shadow: -1px 2px 7.5px 1px #6664;
  border-radius: ${fixedHeight(1)}px;
`;

export const Card1 = () => {
  return <StyledBase className={"full"}></StyledBase>;
};

const PostCard = ({ className }) => {
  return (
    <motion.div className={`postCard full ${className}`}>
      <div className="postTop spBtn">
        <div className="profile al-c">
          <RoundButton></RoundButton>
          <p>User Name User</p>
        </div>
        <p className="stamp al-c">3 days ago</p>
      </div>
      <div className="postMid"></div>
      <div className="postBottom spBtn">
        <p>
          <i className="bx bx-heart"></i> 2.4K
        </p>
        <p>
          <i className="bx bx-chat"></i> 2.4K
        </p>
        <p>
          <i className="bx bx-bookmark"></i>2.4K
        </p>
        <p>
          <i className="bx bx-download"></i> 2.4K
        </p>
      </div>
    </motion.div>
  );
};

export const PostCard1 = styled(PostCard)`
  border-radius: ${fixedHeight(2.5)}px;
  background: white;
  overflow: hidden;
  isolation: isolate;
  box-shadow: -1px 2px 7.5px 1px #6662;

  & > .postTop {
    /* border: 1px solid orange; */
    height: 20%;
    padding: 0 ${fixedHeight(1)}px;
    color: #aaa;

    & > .stamp {
      max-width: 30%;
      width: 30%;
      /* background: pink; */
      justify-content: flex-end;
      font-size: ${fixedHeight(1.25)}px;
    }

    & > .profile {
      /* background: gold; */
      max-width: 65%;
      width: auto;
    }
    & > .profile > button {
      margin-right: ${fixedHeight(1)}px;
      background-color: #eee;
    }
    & > .profile > p {
      /* font-family: "Poppins", sans-serif; */
      font-weight: 400;
      font-size: ${fixedHeight(1.7)}px;
    }
  }

  & > .postMid {
    /* border: 1px solid red; */
    width: 100%;
    height: 65%;
    background-color: #eee4;
  }

  & > .postBottom {
    /* border: 1px solid red; */
    width: 100%;
    height: 15%;
    padding: 0 ${fixedHeight(3)}px;

    & > p {
      align-items: center;
      justify-content: center;
      color: #aaa;
      font-size: ${fixedHeight(1.5)}px;
    }
  }
`;

const ArticleCard = ({ className }) => {
  return (
    <motion.div className={`articleCard full spBtn ${className}`}>
      <div className="left">
        <div className="center full"></div>
      </div>
      <div className="right">
        <h4>Title Of Article</h4>
        <p className="p1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          quidem?
        </p>
        <p className="p2">Author: ...</p>
        <p className="p3">Posted ...</p>
      </div>
    </motion.div>
  );
};

export const ArticleCard1 = styled(ArticleCard)`
  border-radius: ${fixedHeight(2.5)}px;
  background: white;
  overflow: hidden;
  isolation: isolate;
  padding: ${fixedHeight(1.5)}px;
  box-shadow: -1px 2px 7.5px 1px #6662;

  & > .left {
    width: 40%;
    height: 100%;
    overflow: hidden;

    & > div {
      background-color: #eee;
      border-radius: ${fixedHeight(1.5)}px;
    }
  }
  & > .right {
    padding: ${fixedHeight(1)}px;
    width: 60%;
    height: 100%;
    gap: ${fixedHeight(0.1)}px;
    text-align: left;
    & > h4 {
      font-size: ${fixedHeight(1.5)}px;
      height: 20%;
      width: 100%;
      /* background-color: red; */
      overflow: hidden;
    }
    & > p.p1 {
      height: 45%;
      width: 100%;
      font-size: ${fixedHeight(1.3)}px;
      /* background-color: gold; */
      overflow: hidden;
    }
    & > p.p2 {
      height: 20%;
      width: 100%;
      /* background-color: teal; */
      font-size: ${fixedHeight(1.25)}px;
    }
    & > p.p3 {
      width: 100%;
      height: 20%;
      /* background-color: blue; */
      font-size: ${fixedHeight(1.25)}px;
    }
  }
`;



const EventCard = ({ className }) => {
  return (
    <motion.div className={`eventCard full ${className}`}>
      <div className="infoBar spBtn">
        <div className="infoText">
          <p>13 Mar 2024</p>
          <h5>Comedy Gala Night at The Club</h5>
        </div>
        <RoundButton size={6}>
          <i className="bx bx-link"></i>
        </RoundButton>
      </div>
    </motion.div>
  );
};

export const EventCard1 = styled(EventCard)`
  border-radius: ${fixedHeight(5)}px;
  background: white;
  overflow: hidden;
  isolation: isolate;
  padding: ${fixedHeight(1.5)}px;
  box-shadow: -1px 2px 7.5px 1px #6662;
  display: flex;
  align-items: flex-end;

  & > div {
    background: #3331;
    width: 100%;
    height: 35%;
    border-radius: ${fixedHeight(5)}px;
    padding: 0 ${fixedHeight(1)}px;

    & > div {
      /* border: 1px solid black; */
      width: 85%;
      padding: 0 ${fixedHeight(1)}px;
      & > p {
        font-size: ${fixedHeight(1.2)}px;
      }
      & > h5 {
        font-size: ${fixedHeight(1.5)}px;
        /* background-color: red; */
        width: 100%;
      }
    }
    & > button {
      font-size: ${fixedHeight(2.25)}px;
    }
  }
`;