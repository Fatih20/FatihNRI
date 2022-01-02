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

const Buffer = styled.div`
    flex-grow: 1;
`;

const First = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-grow: 1;
    padding: 0 20px;
    position: relative;
    width: 100%;


    & > * {
      width: 50%;
    }
`;

const FloatContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    left: 0;
    justify-content: center;
    position: absolute;
    top: 0;
    width: 50%;


    /* border: solid 1px white; */

`;

const Border = styled.div`
    border-right: solid 2px white;
    height: 80%;
    margin-right: -2px;
    width: 100%;

    /* border: solid 1px red; */

`;

function App() {
  return (
    <>
      <GlobalTransition />
      <Main>
        <First>
          <FloatContainer>
            <Border />
          </FloatContainer>
          <Profile />
          <Body/>
        </First>
        {/* <Buffer /> */}
        <Footer />
    </Main>
    </>
  )
}

export default App;
