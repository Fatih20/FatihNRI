import React from "react";
import styled from "styled-components";

const Main = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: end;
    gap: 10px;
`;

const Photo = styled.img`
    clip-path: circle(47.5% at center);
    display: inline-block;
    margin: -5% -5%;
    width: ${({size}) => `${size}px`};
    height: ${({size}) => `${size}px`};
`;

const PhotoContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 0;
    padding: 0; 
`;

const AboutContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0;
    max-width: 500px;
`;

const Name = styled.h1`
    font-size: 84px;
    font-weight: 800;
    text-align: center;
`;


export default function Profile (){
    return (
        <Main>
            <PhotoContainer>
                <Photo src="Pasfoto.png" size={152}/>
            </PhotoContainer>
                <AboutContainer>
                    <Name>Fatih Nararya R. I. </Name>
                </AboutContainer>
        </Main>
    )
}