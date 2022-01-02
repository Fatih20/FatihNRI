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

function App() {
  return (
    <>
      <GlobalTransition />
      <Main>
        <Profile />
        <Body/>
        {/* <Buffer /> */}
        <Footer />
    </Main>
    </>
  )
}

export default App;
