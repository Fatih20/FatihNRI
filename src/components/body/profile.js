import React from "react";
import styled from "styled-components";

const Main = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
`;

const Photo = styled.img`
    clip-path: circle(47.5% at center);
    display: inline-block;
    margin: -5% -5%;
    width: ${({size}) => `${size}px`};
    height: ${({size}) => `${size}px`};
`;

const AboutContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px 0;
`;

const Name = styled.h1`
    
`;


export default function Profile (){
    return (
        <Main>
            <Photo src="Pasfoto.png" size={200}/>
                <AboutContainer>
                    <Name>Fatih Nararya R. I. </Name>
                </AboutContainer>
        </Main>
    )
}