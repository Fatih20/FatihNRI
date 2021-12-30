import React from "react";
import styled from "styled-components";

const Main = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
`;

const Photo = styled.img`
    display: inline-block;
    clip-path: circle(50% at center);
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
            <Photo src="Pasfoto.png" size={175}/>
                <AboutContainer>
                    <Name>Fatih Nararya R. I. </Name>
                </AboutContainer>
        </Main>
    )
}