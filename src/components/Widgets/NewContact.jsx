import { motion } from "framer-motion";
import styled from "styled-components";
import { fixedHeight, fixedWidth } from "../Functions";
import { RoundButton } from "../Buttons/Buttons";

const BaseContact = ({ className, children }) => {
  return <motion.main className={className}>{children}</motion.main>;
}; 

const Template1 = styled(BaseContact)`
  width: ${fixedWidth(20)}px;
  height: ${fixedHeight(40)}px;
  border-radius: ${fixedHeight(3)}px;
  box-shadow: -1px 2px 7.5px 1px #6664;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  isolation: isolate;
  padding: 0 ${fixedWidth(1)}px;

  & .top {
    width: 100%;
    height: 20%;
    // border: 1px solid black;

    & h3 {
      font-size: ${fixedHeight(2)}px;
    }

    & button {
      background: #666;
      color: white;
      font-size: ${fixedHeight(2.875)}px;
      font-weight: 900 !important;
    }

    @media only screen and (max-width: 768px) {
      height: 17.5%;
    }
  }

  & .bottom {
    width: 100%;
    height: 75%;
    display: flex;
    flex-direction: column;

    & p {
      font-size: ${fixedHeight(1.5)}px;
      height: 10%;
    }
    & input {
      font-size: ${fixedHeight(1.5)}px;
      height: 15%;
      border-radius: ${fixedHeight(1.5)}px;
      padding: 0 ${fixedHeight(1.5)}px;
      background: #aaa2;
      border: none;
    }
    & button {
      color: white;
      height: 17.5%;
      background: #666;
      border-radius: ${fixedHeight(1.5)}px;
      margin-top: ${fixedHeight(1.5)}px;
      font-size: ${fixedHeight(1.5)}px !important;

      @media only screen and (max-width: 768px) {
        margin-top: ${fixedHeight(1.75)}px;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    width: ${fixedWidth(85)}px;
    height: ${fixedHeight(45)}px;
    padding: 0 ${fixedWidth(5)}px;
  }
`;

export const Contact1 = () => {
  
  return (
    <Template1 className={"center"}>
      <div className="top spBtn">
        <h3>New Contact Information</h3>
        <RoundButton size={4.5}>
          <i className="bx bx-x"></i>
        </RoundButton>
      </div>
      <form className="bottom">
        <p className="al-c">Names:</p>
        <input className="al-c" type="text" />

        <p className="al-c">Contact:</p>
        <input className="al-c" type="text" />

        <p className="al-c">Location:</p>
        <input className="al-c" type="text" />

        <button>Save</button>
      </form>
    </Template1>
  );
};

