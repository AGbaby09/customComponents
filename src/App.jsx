import { useEffect, useState } from "react";
import "./App.css";
import Home from "./components/Home";
import SizedBox from "./components/SizedBox/SizedBox";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Main } from "./Pages/Main";
import styled from "styled-components";
import clearsky from "./assets/img/plaa.mp4"
import { BackVid } from "./components/Functions";


function App() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  const setDimensions = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    setDimensions();
  }, [width, height]);

  return (
    <BrowserRouter>
      <main
        id="App"
        className="center"
        style={{ width: width, height: height }}
      >
        {/* <BackVid src={clearsky} autoPlay loop muted>
        </BackVid> */}
          
        <SizedBox w={100} h={100} className={"center"}>
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/home/*"} element={<Main />} />
          </Routes>
        </SizedBox>
      </main>
    </BrowserRouter>
  );
}

export default App;
