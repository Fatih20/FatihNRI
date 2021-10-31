import styled from "styled-components";
import { Container, EducationExperienceBlueprint, Card, CardContainer } from '../GlobalComponent';

const Main = styled(EducationExperienceBlueprint)`
    display: flex;
	flex-wrap: wrap;
	width: 100%;
	padding-bottom: 100px;

    & > * {
        flex-grow: 1;
        padding: 50px;
        text-align: left;
    }

    & > * p {
        font-size: 24px;
        font-weight: 500;
    }
`;

const ExperienceSection = styled(Container)`
    max-width: 800px;
	width: 80%;
`;

const TextContainer = styled.div`
    margin-bottom: 30px;
`;

function Experiences (){  
    const ExperiencesCard = [
        {
            link : "https://firesidedotreviews.wordpress.com/author/narahamsyah/",
            imageLink : "/images/Fireside-Icon-500x120.png",
            title : "Fireside Review",
            caption : "Wrote nearly a dozen articles of game reviews to this review site.",
        },
        {
            link : "https://xournalpp.github.io",
            imageLink : "/images/Xournal-120.png",
            title : "Xournalpp",
            caption : "Wrote and created all of the content in the software's homepage to entice more people to use it.",
        },
    ]
      
    return(
        <Main>
            <ExperienceSection id="writer">
                <TextContainer>
                    <h2>Writer of many things</h2>
                    <p>I believe that writing is a necessary skill for both professional and day-to-day life, regardless of your profession. As such, there are plenty of text and articles I've written to hone in on this critical skill.</p>
                </TextContainer>
                <CardContainer>
                    {ExperiencesCard.map(function(props){
                        return <Card {...props} />
                    })}
                </CardContainer>
            </ExperienceSection>
            <ExperienceSection id="foss-contributor">

            </ExperienceSection>
        </Main>
    )
};

export default Experiences;

