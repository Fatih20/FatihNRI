import React from "react";
import styled from "styled-components";

import options from "../content/options";

const Main = styled.div`
    align-items: center;
    color: white;
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const ProfileContainer = styled.div`
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

const OptionsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;

`;

const Option = styled.div`
    background-color: #333333;
    padding: 15px;
    border-radius: 5px;

    & > h2 {
        font-size: 24px;
        font-weight: 600;
        text-align: center;
    }
`;

function optionMaker({name}) {
    return (
        <Option id={name}>
            <h2>{name}</h2>
        </Option>
    )
}

export default function Body (){
    return (
        <Main>
            <ProfileContainer>
                <Photo src="Pasfoto.png" size={175}/>
                <AboutContainer>
                    <Name>Fatih Nararya R. I. </Name>
                </AboutContainer>
            </ProfileContainer>
            <OptionsContainer>
                {options.map((option) => optionMaker(option))}
            </OptionsContainer>
        </Main>
    )
}