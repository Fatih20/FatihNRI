import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import socialMediaList from "../content/socialMedia";

const Main = styled.div`
    align-items: center;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    height: 7.5vh;
    justify-content: center;
    max-height: 100px;
    margin: 0;
    padding: 10px;
    width: 100%;

    & > p {
        color: #d4d4d4;
        font-weight: 600;
        margin-bottom: 10px;
    }
`;

const IconsContainer = styled.div`
    display: flex;
    font-size: 30px;
    justify-content: center;
    gap: 25px;
`;

const Icons = styled.a`
    color: #d4d4d4;

    &:hover {
        color: white;
    }
`;

export default function Footer (){
    return (
        <Main>
            <IconsContainer>
                <Icons href="https://www.instagram.com/fatih_nararya/"><FontAwesomeIcon icon={faInstagram} /></Icons>
                <Icons href="https://www.linkedin.com/in/fatih-nararya-088a86215/"><FontAwesomeIcon icon={faLinkedin} /></Icons>
                <Icons href="https://github.com/Fatih20"><FontAwesomeIcon icon={faGithub} /></Icons>
            </IconsContainer>
        </Main>
    )
}