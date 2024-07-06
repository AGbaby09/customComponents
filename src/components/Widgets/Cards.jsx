import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { fixedHeight, fixedWidth, PillButton, RoundButton } from "../Functions";
import { ResDev } from "./ResDev";
import One from "../../assets/img/one.png"
import Two from "../../assets/img/two.png"
import falling from "../../assets/img/falling.jpg";

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

const PostCard = ({ className, initial, animate, variants }) => {
  
  return (
    <motion.div
      variants={variants}
      initial={initial}
      animate={animate}
      className={`postCard full ${className}`}
    >
      <div className="postTop spBtn">
        <div className="profile al-c">
          <RoundButton>AG</RoundButton>
          <p>User Name User</p>
        </div>
        <p className="stamp al-c">3 days ago</p>
      </div>
      <div className="postMid center">
        <img src={One} alt="" />
      </div>
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
  background: #fff4;
  backdrop-filter: blur(${fixedHeight(1)}px);
  overflow: hidden;
  isolation: isolate;
  box-shadow: -1px 2px 7.5px 1px #6662;

  & > .postTop {
    /* border: 1px solid orange; */
    height: 20%;
    padding: 0 ${fixedHeight(1)}px;
    color: #eee;

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
      text-shadow: 0 2px #3335;
    }
    & > .profile > button {
      margin-right: ${fixedHeight(1)}px;
      background: #fff4;
      backdrop-filter: blur(${fixedHeight(1)}px);
    }
    & > .profile > p {
      /* font-family: "Poppins", sans-serif; */
      font-weight: 400;
      font-size: ${fixedHeight(1.55)}px;
    }
  }

  & > .postMid {
    /* border: 1px solid red; */
    width: 100%;
    height: 65%;
    background-color: #eee4;
    padding: 3px 0;
    > img {
      object-fit: contain;

      width: 100%;
      height: 140%;
    }
  }

  & > .postBottom {
    /* border: 1px solid red; */
    width: 100%;
    height: 15%;
    padding: 0 ${fixedHeight(3)}px;

    & > p {
      align-items: center;
      justify-content: center;
      color: #ddd;
      text-shadow: 0 2px #3335;
      font-size: ${fixedHeight(1.5)}px;
    }
  }
`;

const ArticleCard = ({ className }) => {
  return (
    <motion.div className={`articleCard full spBtn ${className}`}>
      <div className="left">
        <div className="center full">
          <img src={Two} alt="" className="full" />
        </div>
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
  background: #fff3;
  backdrop-filter: blur(${fixedHeight(1)}px);
  overflow: hidden;
  isolation: isolate;
  padding: ${fixedHeight(1.5)}px;
  box-shadow: -1px 2px 7.5px 1px #6662;

  & > .left {
    width: 40%;
    height: 100%;
    overflow: hidden;

    & > div {
      /* background: #fff0; */
      backdrop-filter: blur(${fixedHeight(0.1)}px);
      border-radius: ${fixedHeight(1.5)}px;
    }
  }
  & > .right {
    padding: ${fixedHeight(1)}px;
    width: 60%;
    height: 100%;
    gap: ${fixedHeight(0.1)}px;
    text-align: left;
    text-shadow: 0 1px #3335;
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
  background-color: linear-gradient( transparent, transparent, #333, #000);
  background-blend-mode:multiply;
  backdrop-filter: blur(${fixedHeight(1)}px);
  overflow: hidden;
  isolation: isolate;
  padding: ${fixedHeight(1.5)}px;
  box-shadow: -1px 2px 7.5px 1px #6662;
  display: flex;
  align-items: flex-end;
  background-image: url(${falling});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  & > div {
    background: #fff3;
    backdrop-filter: blur(${fixedHeight(1)}px);
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
        text-shadow: 0 2px #3335;
      }
      & > h5 {
        font-size: ${fixedHeight(1.5)}px;
        /* background-color: red; */
        width: 100%;
        text-shadow: 0 2px #3335;
        color: #ddd;
      }
    }
    & > button {
      font-size: ${fixedHeight(2.25)}px;
      background: radial-gradient(#fafafa5c, #8080807f, #666666ca, #22222275);
      backdrop-filter: ${fixedHeight(1.5)}px;
      text-shadow: 0px 0px ${fixedHeight(0.5)}px #333;
    }
  }
`;


const CardPost = ({ className }) => {
  return (
    <motion.div className={`eventCard full ${className}`}>

    </motion.div>
  )
}

export const CardPost1 = styled(CardPost)`
  width: 100%;
  height: 100%;
  /* border: 1px solid red; */
  background: #fff4;
  backdrop-filter: blur(${fixedHeight(1)}px);
  box-shadow: -1px 2px 7.5px 1px #6662;
`;


const FollowCard = ({ className }) => {
  return (
    <motion.div className={`followCard full spBtn ${className}`}>
      <div className="left al-c">
        <RoundButton size={6} className="center full">
          <img src={falling} alt="" className="full" />
        </RoundButton>
        <div className="txt">
          <p>Full Name</p>
          <p>Job</p>
        </div>
      </div>
      <PillButton>Follow</PillButton>
    </motion.div>
  );
};

export const FollowCard1 = styled(FollowCard)`
  width: 100%;
  height: 100%;
  border-radius: ${fixedHeight(1)}px;
  padding: ${fixedHeight(1)}px;
  background: #fff3;
  backdrop-filter: blur(${fixedHeight(1.5)}px);
  box-shadow: -1px 2px 7.5px 1px #6662;

  > .left {
    /* border: 1px solid white; */
    height: 100%;
    width: 80%;
    column-gap: ${fixedHeight(0.5)}px;

    > .txt {
      display: grid;

      > p {
        text-shadow: 0 2px #3335;

        &:first-child {
          font-size: ${fixedHeight(1.7)}px;
          color: #eee;
        }
        &:last-child {
          font-size: ${fixedHeight(1.5)}px;
          color: #ccc;
        }
      }
    }
  }

  > button {
    height: 60%;
    background: #0005;
    border-radius: ${fixedHeight(5)}px;
  }
`;

const ConvoCard = ({ className }) => {
  return (
    <motion.div className={`convoCard full ${className}`}>
      <div className="upper"></div>

    </motion.div>
  );
};

export const ConvoCard1 = styled(ConvoCard)`
  background: #fff3;
  backdrop-filter: blur(${fixedHeight(1.5)}px);
  border-radius: ${fixedHeight(2.5)}px;
`;