import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { Container } from '../GlobalComponent';

const Main = styled.div`
    background-color: #2a74df;
	padding-top: 100px;
`;

const MainContainer = styled(Container)`
    color: white;
	display: flex;
	flex-wrap: wrap;
	height: 100%;
	max-width: 1600px;
	text-align: left;
	width: 80%;
`;

const TextContainer = styled.div`
    width: 65%;
	padding-bottom: 25px;
    & h1 {
        font-size: 54px;
        vertical-align: top;
        margin-bottom: 10px;
    }

    & h2 {
        color: rgba(255, 255, 255, 0.85);
        font-size: 32px;
        font-weight: 600;
        margin-bottom: 50px;
    }
    
    & p {
        font-size: 21px;
    }
`;

const Photo = styled.img`
    align-self: flex-end;
	width: 35%;
`;

function Banner (){
    return (
        <Main>
            <MainContainer>
                <TextContainer>
                    <h1>A knowledge-seeker who has dabbled in many diverse fields.</h1>
                    <h2>From making game reviews article to redesigning and coding a software's homepage as well as copywriting its content.</h2>
                    <p>Hello! I'm Fatih Nararya Rashadyfa Ilhamsyah.</p>
                </TextContainer>
                <Photo src="images/Pasfoto.png" />
            </MainContainer>
        </Main>
    )
};

export default Banner;