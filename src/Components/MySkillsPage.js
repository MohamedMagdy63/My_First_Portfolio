import React from "react";
import styled, { ThemeProvider } from "styled-components";
import {lightTheme} from "./Themes";
import {Design , Develope} from "./AllSvgs";
import LogoComponent from "../SubComponents/LogoComponent"
import PowerButton from "../SubComponents/PowerButton";
import SocialIcons from "../SubComponents/SocialIcons";
import ParticleComp from "../SubComponents/ParticleComp";
import BigTitlte from "../SubComponents/BigTitlte";

const Box =styled.div`
background-color: ${props=>props.theme.body};
width: 100vw;
height: 100vh;
position: relative;
display: flex;
justify-content: space-evenly;
align-items: center;
`
const Main =styled.div`
border: 2px solid ${props=>props.theme.text};
color: ${props=>props.theme.text};
background-color:${props=>props.theme.body} ;
padding: 2rem;
width: 30vw;
height: 60vh;
z-index: 3;
line-height: 1.5;
cursor: pointer;
font-family: 'Ubuntu Mono',monospace;
display: flex;
flex-direction: column;
justify-content: space-between;

&: hover{
    color:  ${props=>props.theme.body};
    background-color: ${props=>props.theme.text} ;
}
`
const Title = styled.h2`
display: flex;
justify-content: center;
align-items: center;
font-size: calc(1em + 1vw);

${Main}: hover &{
    &>*{
        fill:  ${props=>props.theme.body};
    }
}

&>*: first-child{
    margin-right:1rem;
}
`
const Describe =styled.div`
color: ${props=>props.theme.text};
font-size: calc(0.6em + 1vw);
padding: 0.5rem 0;
${Main}: hover &{

    color:  ${props=>props.theme.body};
}
strong {
    margin-bottom: 1rem;
    text-transform: uppercase;
}
ul,p{
    margin-left: 2rem;
}

`
    


const MySkillsPage =()=>{
    return(
        <ThemeProvider theme={lightTheme}>
            <Box>
                <LogoComponent theme = "light"/>
                <PowerButton  />
                <SocialIcons theme = "light" />
                <ParticleComp theme = "light" />
                <Main>
                    <Title>
                        <Design width={40} height= {40} />Designer
                    </Title>
                    <Describe>
                        I love create new ideas which speaks, keep it clean ,minimal and simple. 
                    </Describe>
                    <Describe>
                        <strong>I like to Design</strong>
                            <ul>
                                <li>web Design</li>
                                <li>2D Games</li>
                            </ul>
                    </Describe>
                    <Describe>
                        <strong>Tools</strong>
                            <ul>
                                <li>Figma</li>
                            </ul>
                    </Describe>
                </Main>
                <Main>
                    <Title>
                        <Develope width={40} height= {40} />FullStack Developer
                    </Title>
                    <Describe>
                        I look forward to be a brand for which i'm creating, as i always enjoy bringing new ideas to life.
                    </Describe>
                    <Describe>
                    <strong>Skills</strong>
                        <p>
                            Html,Css,Js,C,C++,Python,
                            React,Firebase,java EE,
                            mySql.
                        </p>
                    </Describe>
                    <Describe>
                        <strong>Tools</strong>
                            <p>
                                VScode, Github 
                            </p>
                    </Describe>
                    <BigTitlte text="SKILLS" top="80%" right="30%" />
                </Main>
            </Box>
        </ThemeProvider>
        
    )
}

export default MySkillsPage;