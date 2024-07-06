import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import {
  fixedHeight,
  fixedWidth,
  PillButton,
  RoundButton,
} from "../components/Functions";
import {
  ArticleCard1,
  CardPost1,
  ConvoCard1,
  EventCard1,
  FollowCard1,
  PostCard1,
} from "../components/Widgets/Cards";
import QMark from "../assets/img/question-mark.png";
import IPhone from "../assets/img/iphoneModel.png";

const Base = ({ children, className }) => {
  return <motion.div className={className}>{children}</motion.div>;
};

const StyledBase = styled(Base)``;
const container = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      type: "tween",
      delayChildren: 0,
      ease: "easeInOut", // Added ease
      duration: 0.5, // Added duration
      staggerChildren: 0.1,
    },
  },
};
const items = {
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
  },
  transition: { duration: 0.5 },
};
const itemss = {
  hidden: { y: -50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
  transition: { duration: 0.5 },
};

// start of Feed
const TimeLineFeed = ({ className, data }) => {
  return (
    <motion.section className={`al-c full ${className}`}>
      <motion.div className={`tile ${className}`}>
        <p className="center">Recent Components</p>
        <motion.div
          variants={container}
          initial={"hidden"}
          animate={"visible"}
          className="bottomList scrollable"
        >
          {data &&
            data.map((item) => (
              <motion.div variants={items} className="bottomCard">
                <PostCard1 />
              </motion.div>
            ))}
        </motion.div>
      </motion.div>
      <motion.div className={"tile"}>
        <p className="center">Recent Articles</p>
        <motion.div
          variants={container}
          initial={"hidden"}
          animate={"visible"}
          className="bottomList scrollable"
        >
          {data &&
            data.map((item) => (
              <motion.div variants={itemss} className="bottomArticle">
                <ArticleCard1 />
              </motion.div>
            ))}
        </motion.div>
      </motion.div>
      <motion.div className={"tile"}>
        <p className="center">Upcoming Events</p>
        <div className="bottomList scrollable">
          {data &&
            data.map((item) => (
              <div className="bottomEvent">
                <EventCard1 />
              </div>
            ))}
        </div>
      </motion.div>
    </motion.section>
  );
};

export const FeedTimeLine = styled(TimeLineFeed)`
  overflow: hidden;

  > .tile {
    width: 30%;
    height: 100%;
    padding: 0 ${fixedHeight(1)}px;
    /* border: 1px solid red; */

    > p {
      text-align: center;
      width: 100%;
      font-size: ${fixedHeight(1.5)}px;
      height: 5%;
      border-bottom: 1px solid #9995;
      color: silver;
    }

    > .bottomList {
      width: 100%;
      height: 95%;
      display: grid;
      grid-template-columns: 1fr;

      & > div.bottomCard {
        /* border: 1px solid black; */
        width: 100%;
        height: ${fixedHeight(35)}px;
        padding: ${fixedHeight(1)}px;
      }
      & > div.bottomArticle {
        /* border: 1px solid black; */
        width: 100%;
        height: ${fixedHeight(20)}px;
        padding: ${fixedHeight(1)}px;
      }
      & > div.bottomEvent {
        /* border: 1px solid black; */
        width: 100%;
        height: ${fixedHeight(27.5)}px;
        padding: ${fixedHeight(1)}px;
      }
    }
  }
`;
// end of Feed

// sstart of Overview
const TimeLineOverview = ({ className, data }) => {
  return (
    <motion.section className={`al-c full ${className}`}>
      <div className="post">
        <div className="slab one">
          <div className="up">
            <h3 className="al-c">
              Welcome To <br /> Your Timeline
            </h3>
            <p className="al-c">Start a conversation</p>
            <img src={QMark} alt="" />
          </div>
          <div className="down spEven">
            <textarea name="" id="" className=""></textarea>
            <RoundButton size={7}>
              <i className="bx bxs-send"></i>
            </RoundButton>
          </div>
        </div>
        <div className="slab two">
          <h4 className="al-c">Trending</h4>
          <ul className="scrollable">
            <li>
              <FollowCard1 />
            </li>
            <li>
              <FollowCard1 />
            </li>
            <li>
              <FollowCard1 />
            </li>
            <li>
              <FollowCard1 />
            </li>
          </ul>
        </div>
        <div className="slab three">
          <h4 className="al-c">Who to follow</h4>
          <ul className="scrollable">
            <li>
              <FollowCard1 />
            </li>
            <li>
              <FollowCard1 />
            </li>
            <li>
              <FollowCard1 />
            </li>
            <li>
              <FollowCard1 />
            </li>
          </ul>
        </div>
      </div>
      <div className="problem">
        <ul className="slab scrollable">
          <li><ConvoCard1 /></li>
          <li><ConvoCard1 /></li>
          <li><ConvoCard1 /></li>
          <li><ConvoCard1 /></li>
          <li><ConvoCard1 /></li>
          <li><ConvoCard1 /></li>
          <li><ConvoCard1 /></li>
          <li><ConvoCard1 /></li>
        </ul>
      </div>
      <div className="community">
        <img src={IPhone} alt="" className="full" />
      </div>
    </motion.section>
  );
};

export const OverviewTimeLine = styled(TimeLineOverview)`
  isolation: isolate;
  overflow: hidden;
  /* padding: 0 ${fixedHeight(1)}px; */
  > span {
    height: 80%;
    border: 1px solid #ddd;
  }
  > div {
    /* border: 1px solid grey; */
    isolation: isolate;
    height: 100%;
    padding: ${fixedHeight(1)}px 0;

    > .list {
      width: 100%;
      height: 100%;
      display: grid;
      grid-template-columns: 1fr;
      isolation: isolate;

      > .item {
        padding: ${fixedHeight(1)}px 0;
        height: ${fixedHeight(30)}px;
        width: 100%;
        /* border: 1px solid green; */
        background: transparent;
      }
    }

    &.post {
      width: 25%;
      /* border: 1px solid red; */
      display: flex;
      flex-direction: column;
      row-gap: ${fixedHeight(1)}px;

      .slab {
        isolation: isolate;
        overflow: hidden;
        width: 100%;
        background: #ddd3;
        text-shadow: 0 0 2px #222;
        border-radius: ${fixedHeight(1)}px;
        backdrop-filter: blur(${fixedHeight(1.3)}px);

        &.one {
          height: 25%;
          box-shadow: -1px 2px 15px 1px #6661;

          .up {
            /* border: 1px solid white; */
            height: 60%;
            padding: 0 ${fixedHeight(1)}px;

            h3 {
              font-size: ${fixedHeight(2)}px;
              margin: auto;
              height: 65%;
              color: #eee;
            }
            p {
              font-size: ${fixedHeight(1.5)}px;
              margin: auto;
              color: #bbb;
              height: 35%;
            }
            img {
              position: absolute;
              top: ${fixedHeight(-2)}px;
              right: 0;
              width: ${fixedHeight(10)}px;
              height: ${fixedHeight(17)}px;
              transform: scale(0.6);
            }
          }

          .down {
            /* border: 1px solid red; */
            height: 37.5%;

            textarea {
              border: none;
              border-bottom: ${fixedHeight(0.1)}px solid #aaa;
              color: white;
              background: transparent;
              outline: none;
              resize: none;
              height: 85%;
              width: 77.5%;
              /* border-radius: ${fixedHeight(1.5)}px; */
              display: flex;
              padding: ${fixedHeight(1)}px;
              align-items: flex-end;
            }

            button {
              background: #fff5;
              font-size: ${fixedHeight(2.5)}px;
            }
          }
        }

        &.two,
        &.three {
          height: 37.5%;
          padding: 0 ${fixedHeight(2.5)}px;
          background: none;
          backdrop-filter: none;

          h4 {
            color: #fff;
            height: 15%;
            font-weight: 550;
          }
          ul {
            list-style-type: none;
            /* border: 1px solid silver; */
            height: 80%;
            display: grid;
            grid-template-columns: 1fr;
            li {
              /* border: 1px solid teal; */
              width: 100%;
              height: ${fixedHeight(8)}px;
              padding: ${fixedHeight(0.25)}px 0;
            }
          }
        }
      }
    }
    &.problem {
      width: 27.5%;
      /* border: 1px solid red; */
      .slab {
        width: 95%;
        height: 100%;
        margin: auto;
        /* backdrop-filter: blur(${fixedHeight(1.3)}px); */

        li {
          width: 100%;
          padding: ${fixedHeight(1)}px;
          /* background: #fff2; */
          height: ${fixedHeight(25)}px;
        }
      }
    }
    &.community {
      width: 25%;
      /* border: 1px solid white; */

      img{
        scale: 4;
        object-fit: contain;
        top: 1%;
      }
    }
  }
`;
// end of Overview
