import React from "react";
import styled from "styled-components";

import { GlobalTransition } from "./GlobalComponent";
import Footer from "./components/footer";
import Body from "./components/body";

const Main = styled.div`
  display: flex;
  flex-direction: column;
`;



function App() {
  return (
    <>
      <GlobalTransition />
      <Main>
        <Body />
        <Footer />
    </Main>
    </>
  )
}

export default App;
