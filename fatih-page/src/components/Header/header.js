import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { HFContainer, HFLink } from '../GlobalComponent';

const Main = styled.div`
    background-color: #2a74df;
	display: block;
	height: 50px;
	padding: 0px 20px 0px 20px;
	position: fixed;
	width: 100%;
	z-index: 10;
`;

const MainContainer = styled(HFContainer)`
	& > *{
		text-align: right;
	}
`;

const LinkContainer = styled.div`
	display: inline-block;
`;

const HLink = styled(HFLink)`
	&:hover {
		color: white;
	}
`;

function Header (){
    return (
        <Main>
			<MainContainer>
				<LinkContainer>
					<HLink>kjnjnk</HLink>
				</LinkContainer>
			</MainContainer>
        </Main>
    )
};

export default Header;