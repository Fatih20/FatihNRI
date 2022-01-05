import React from "react";
import styled from "styled-components";

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Main = styled.div`
    align-items: center;
    box-sizing: border-box;
    display: flex;
    font-size: 2.5em;
    flex-direction: column;
    justify-content: center;
    margin: 0;
    padding: 0.1em;
    width: 100%;

    /* border : solid 1px white; */

    & > p {
        color: #d4d4d4;
        font-weight: 600;
        margin-bottom: 10px;
    }
`;

const IconsContainer = styled.div`
    display: flex;
    font-size: 0.8em;
    justify-content: center;
    gap: 1.5rem;

    @media (max-width: 601px){
        font-size: 1em;
    }
`;

const Icons = styled.a`
    color : ${({theme}) => theme.unselectedBareText};

    &:hover {
        color: ${({theme}) => theme.regularText};
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