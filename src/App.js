import React from "react";
import styled from "styled-components";

import { GlobalTransition } from "./GlobalComponent";
import Footer from "./components/footer";
import Body from "./components/body/body";
import Profile from "./components/profile";

const Main = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  height: 100vh;

  /* border: solid 1px white; */
`;

const FirstContainer = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    height: 100%;
    justify-content: center;
    overflow: hidden;
    padding: 0 20px;
    width: 100%;
`;

const First = styled.div`
    display: flex;
    height: 80%;
    position: relative;
    width: 100%;

    & > * {
      width: 50%;
    }

    /* border : solid 1px white; */
`;

const FloatContainer = styled.div`
    background-color: rgba(0,0,0,0);
    display: flex;
    flex-direction: column;
    height: 100%;
    left: 0;
    justify-content: center;
    position: absolute;
    top: 0;
    width: 50%;
    z-index: -1;


    /* border: solid 1px white; */

`;

const Border = styled.div`
    border-right: solid 2px white;
    height: 100%;
    margin-right: -2px;
    width: 100%;

    /* border: solid 1px red; */

`;

function App() {
  return (
    <>
      <GlobalTransition />
      <Main>
        <FirstContainer>
          <First>
            <FloatContainer>
              <Border />
            </FloatContainer>
            <Profile />
            <Body/>
          </First>
        </FirstContainer>
        <Footer />
    </Main>
    </>
  )
}

export default App;
