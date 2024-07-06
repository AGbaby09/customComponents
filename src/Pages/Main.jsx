import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { compMotion, fixedHeight, fixedWidth } from "../components/Functions";
import { ResDev } from "../components/Widgets/ResDev";
import { Nav1 } from "../components/Widgets/NavBar";
import { RoundButton } from "../components/Buttons/Buttons";
import {
  ArticleCard1,
  Card1,
  EventCard1,
  PostCard1,
} from "../components/Widgets/Cards";
import { NavLink, Routes, Route } from "react-router-dom";
import CompLink from "../components/Widgets/CompLink";
import { FeedTimeLine, OverviewTimeLine } from "./TimeLine";

const Base = ({ children, className }) => {
  return <motion.div className={className}>{children}</motion.div>;
};

const StyledBase = styled(ResDev)`
  /* border: 1px solid red; */
  display: flex;

  & .main-body {
    /* background: #eee3; */
    background: #0001;
    /* backdrop-filter: blur(${fixedHeight(0.5)}px); */
    /* border: 1px solid rgba(192, 192, 192, 0.5); */
    margin: auto 0;
  }
`;

const Body = styled(ResDev)`
  border-radius: ${fixedHeight(2)}px;

  & .top {
    padding: 0 ${fixedHeight(3)}px;
    background: #fff1;
    /* box-shadow: 0px ${fixedHeight(1)}px 7.5px 1px #6664; */
    border-bottom: ${fixedHeight(0.1)}px solid #aaa5;
    border-radius: ${fixedHeight(2)}px ${fixedHeight(2)}px 0 0;
    backdrop-filter: blur(${fixedHeight(1)}px);

    width: 100%;
    height: 10%;

    & .half {
      /* border: 1px solid black; */
      width: 100%;
      height: 50%;

      & h4 {
        color: #eee;
      }
      & .buttons {
        /* border: 1px solid red; */
        height: 100%;
        width: 30%;

        & > .Welcount {
          /* border: 1px solid blue; */
          height: 100%;
          width: ${fixedHeight(30)}px;
          justify-content: flex-end;

          & p {
            font-size: ${fixedHeight(1.5)}px;
            background-color: #eee3;
            /* border: 1px solid red; */
            max-width: 100%;
            width: auto;
            height: 80%;
            padding: 0 ${fixedHeight(1)}px;
            border-radius: ${fixedHeight(5)}px;
            text-align: center;
            color: #ccc;
          }
        }

        & button {
          background: #eee3;
          font-size: ${fixedHeight(2)}px;
          color: #eee;
        }
      }
      & .navButtons {
        height: 100%;
        width: auto;
        /* border-bottom: ${fixedHeight(0.1)}px solid #eee; */
        /* box-shadow: 0px ${fixedHeight(1)}px 7.5px 1px #6664; */
        & button,
        a {
          height: 100%;
          width: auto;
          margin: 0 ${fixedHeight(2)}px 0 0;
          /* box-shadow: -1px 2px 7.5px 1px #6664; */
          background: transparent;
          font-size: ${fixedHeight(1.5)}px;
          color: #ddd;

          &.active {
            /* background-color: red; */
          }
          &.active::after {
            width: 100%;
            height: 3%;
          }

          &:hover::after {
            /* border-bottom: ${fixedHeight(0.3)}px solid #999; */
            width: 100%;
            height: 2.5%;
          }

          &::after {
            position: absolute;
            bottom: 0;
            transition: all 300ms ease;
            /* display: none; */
            content: "";
            padding: 0 2%;
            width: 0px;
            height: 0%;
            position: absolute;
            background-color: #ddd;
          }
        }
      }
    }
  }

  & .weather,
  .time {
    position: absolute;
    top: 10%;
    z-index: 20;
    right: 0;
    padding: ${fixedHeight(1)}px;

    > .full {
      -webkit-backdrop-filter: ${fixedHeight(1)}px;
      backdrop-filter: ${fixedHeight(1)}px;
      background: #fff8;
    }
  }

  & .bottom {
    width: 100%;
    height: 90%;
    padding: 0 ${fixedHeight(1.5)}px;
    overflow: hidden;
  }
`;

export const Main = () => {
  const [weather, setWeather] = useState(false);
  const [clock, setClock] = useState(false);

  const data = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];

  return (
    <StyledBase className={""} max={{ w: 100, h: 100 }}>
      <Nav1 />
      <Body max={{ w: 84.7, h: 99 }} className={"main-body"}>
        {/* weather and time widgets */}
        {weather && (
          <ResDev
            variants={compMotion.item}
            initial="hidden"
            animate="visible"
            max={{ w: 15, h: 40 }}
            className="weather"
          >
            <Card1 />
          </ResDev>
        )}
        {clock && (
          <ResDev
            variants={compMotion.item}
            initial="hidden"
            animate="visible"
            max={{ w: 15, h: 40 }}
            className="time"
          >
            <Card1 />
          </ResDev>
        )}
        {/* end of weather and time widgets */}
        <div className="top">
          <div className="half spBtn">
            <h4>Dashboard</h4>
            <div className="buttons spBtn">
              <div className="Welcount al-c">
                <p className="center">
                  <i className="bx bxs-account"></i>
                  Welcome, shadaladadoo
                </p>
              </div>
              <RoundButton
                onClick={() => {
                  setWeather(false);
                  setClock(!clock);
                }}
                size={3.5}
              >
                <i className="bx bxs-bell"></i>
              </RoundButton>
              <RoundButton
                onClick={() => {
                  setWeather(false);
                  setClock(!clock);
                }}
                size={3.5}
              >
                <i className="bx bxs-chat"></i>
              </RoundButton>
              <RoundButton
                onClick={() => {
                  setWeather(false);
                  setClock(!clock);
                }}
                size={3.5}
              >
                <i className="bx bx-time-five"></i>
              </RoundButton>
              <RoundButton
                onClick={() => {
                  setWeather(!weather);
                  setClock(false);
                }}
                size={3.5}
              >
                <i className="bx bx-cloud"></i>
              </RoundButton>
            </div>
          </div>
          <div className="half">
            <Routes>
              <Route
                path={"/timeline/*"}
                element={<BottomNav nav={"timeline"} />}
              />
              <Route
                path={"/dashboard/*"}
                element={<BottomNav nav={"dashboard"} />}
              />
            </Routes>
          </div>
        </div>
        <div className="bottom">
          <Routes>
            <Route
              path={"/timeline"}
              element={<CompLink path={"/home/timeline/overview"} />}
            />
            <Route
              path={"/timeline/overview"}
              element={<OverviewTimeLine data={data}/>}
              />
            <Route
              path={"/timeline/feed"}
              element={<FeedTimeLine data={data}/>}
            />
          </Routes>
        </div>
        ;
      </Body>
    </StyledBase>
  );
};



const TimeLineOverview = ({ data }) => {
  return (
    <>
      <motion.div className={"slot"}>
         
      </motion.div>
    </>
  );
};

const BottomNav = ({ nav }) => {
  switch (nav) {
    case "timeline":
      return (
        <div className="navButtons al-c">
          <NavLink className={"center"} to={"/home/timeline/overview"}>
            Overview
          </NavLink>
          <NavLink className={"center"} to={"/home/timeline/feed"}>
            Feed
          </NavLink>
          <NavLink className={"center"} to={"/home/timeline/activities"}>
            Activities
          </NavLink>
          <NavLink className={"center"} to={"/home/timeline/Other"}>
            Other
          </NavLink>
        </div>
      );
      break;
    case "dashboard":
      return (
        <div className="navButtons al-c">
          <NavLink className={"center"} to={"/home/dashboard/overview"}>
            Overview
          </NavLink>
          <NavLink className={"center"} to={"/home/dashboard/analytics"}>
            Analytics
          </NavLink>
          <NavLink className={"center"} to={"/home/dashboard/profile"}>
            Profile
          </NavLink>
          <NavLink className={"center"} to={"/home/dashboard/Other"}>
            Other
          </NavLink>
        </div>
      );
      break;

    default:
      return (
        <div className="navButtons al-c">
          <NavLink className={"center"} to={"/"}>
            Home
          </NavLink>
          <NavLink className={"center"} to={"/"}>
            About Us
          </NavLink>
          <NavLink className={"center"} to={"/"}>
            Our Services
          </NavLink>
        </div>
      );
      break;
  }
};
