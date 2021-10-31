import styled from "styled-components";

const Container = styled.div`
    margin: 0 auto;
`;

const CardStyles = styled.div`
    border-radius: 5%;
	margin: 0 auto;
	padding: 20px 30px;
	position: relative;
	transition: all 0.5s;
	text-align: center;
	width: 200px;

    & span {
        height: 100%;
        left: 0;
        position: absolute;
        top: 0;
        width: 100%;
    }

    & img {
        max-width: 100%;
	    margin-bottom: 5px;
    }

    & h4 {
        font-size: 24px;
	    margin-bottom: 10px;
    }

    & h5 {
        font-size: 20px;
	    font-weight: 500;
    }

    & p {
        font-size: 18px;
    }

    &:hover {
        background-color: #fafafa;
        color: black;
        box-shadow: 0px 5px #abacae; 
        top: -5px;
    }
`;

const HFContainer = styled(Container)`
    color: #e5e5e5;
    display: inline-block;
	line-height: 50px;
`;

const HFLink = styled.a`
    margin-right: 20px;

    &::last-child {
        margin-right: 0px;
    }
`;

const EducationExperienceBlueprint = styled.div`
    background-color:  #0e274d;
	color: white;

    & > * h2 {
        font-size: 40px;
        font-weight: 600;
        margin-bottom: 20px;
    }
`;

const CardContainer = styled.div`
    display: flex;
	flex-wrap: wrap;
	margin: 0 auto;
	max-width: 80%;
`;

function Card ({ link, imageLink, title, caption }) {
    return(
        <CardStyles>
            <a href={link}><span></span></a>
            <img src={imageLink}/>
            <h4>{title}</h4>
            <p>{caption}</p>
        </CardStyles>
    )
};

export { 
    Container, 
    Card, 
    HFContainer, 
    HFLink, 
    EducationExperienceBlueprint, 
    CardContainer,
};