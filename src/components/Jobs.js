import React from 'react';
import styled from 'styled-components';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

export default function Jobs(props) {

    console.log(props.jobsData);
    return (
        <Container>
            {props.jobsData.map((job) => {    
                console.log(job, 'job'); 
                return (
                    <Card>
                    <Header>
                        <img src={job.logo} alt="logo"/>
                        <CustomDots />
                    </Header>
                    <h1>{job.roleName}</h1>
                    <Description>
                        <p>{job.requirements.content}</p>
                    </Description>
                    <Buttons>
                        <Button> Apply now </Button> 
                        <MessageButton>Message</MessageButton>                   
                    </Buttons>
                </Card>
                )
            })}
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
    justify-content: center;
`
const Card = styled.div`
    flex: 0.33;
    display: flex;
    flex-direction: column;
    flex-basis: 250px;
    background-color: #1c1c24;
    padding: 30px;
    border-radius: 10px;
    cursor: pointer;
    transition: transform 0.2s;

    h1 {
        color: white;
        margin: 15px 0px;
        font-size: 20px;
    }


    &:hover {
        transform: scale(1.05);
    }

`
const Header = styled.div`
    display: flex;
    justify-content: space-between;

    img {
        height: 50px;
        border-radius: 10px;
    }
`
const Description = styled.div`
    overflow: hidden;
    flex-grow: 1;
    p {
        color: lightgray;
        font-size: 18px;
    }
`
const Buttons = styled.div`
    margin-top: 15px;
    display: flex;
    justify-content: space-between;
`

const Button = styled.div`
    background-color: #3060ff;
    height: 40px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    max-width: 120px;
    color: white;
    cursor: pointer;
    &:hover {
        background-color: #5C82FF;
    }
`

const MessageButton = styled(Button)`
    background-color: #2e2e39;
    color: #96939b;
    &:hover {
        background-color: #96939b;
        color: #2e2e39;
    }
`

const CustomDots = styled(MoreHorizIcon)`
    color: white;
`