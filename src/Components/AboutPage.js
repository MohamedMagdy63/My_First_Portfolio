import React from "react";
import styled, { keyframes, ThemeProvider } from "styled-components";
import {DarkTheme} from "./Themes";

import astronaut from "../assets/Images/spaceman.png"

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
overflow: hidden;
`
const float =keyframes`
0%{transform:  translateY(-10px)};
50%{transform:  translateY(15px) translateX(15px)};
100%{transform:  translateY(-10px)};
`
const Spaceman =styled.div`
position: absolute;
top: 10%;
right: 5%;
width: 20vw;
animation: ${float} 4s ease infinite;
img{
    width: 100%;
    height: auto;
}
`
const Main =styled.div`
border: 2px solid ${props=>props.theme.text};
color:  ${props=>props.theme.text};
padding: 2rem;
width: 50vw;
height: 60vh;
z-index:1.5;
line-height:1.5;
display: flex;
justify-content: center;
align-items:center;
font-size: calc(0.6rem + 1vw);
backdrop-filter:blur(4px);
position: absolute;
left: calc(5rem + 5vw);
top:10rem;
font-family: 'Ubuntu Mono',monospace;
font-style: italic;
`
const AboutPage =()=>{
    return(
        <ThemeProvider theme={DarkTheme}>
            <Box>
                <LogoComponent theme = "dark"/>
                <PowerButton  />
                <SocialIcons theme = "dark" />
                <ParticleComp theme = "dark" />
                <Spaceman>
                    <img src={astronaut} alt="space man"/>
                </Spaceman>
                <Main>
                    I'm a full-stack developer located in Egypt.
                    I love create full web sites that simple yet 
                    with great user interact with database and experince.
                    <br/><br/>
                    I'm a Computer Engineering.
                    Interested in the whole frontend and backend stack Like trying 
                    new things and building great projects.
                    Also I make beautiful 2D games will see all my work 
                    in WORK page. 
                    <br/><br/>
                    I believe everything is an Art when you 
                    put your consciousness in it.
                    You can connect with me via social links.
   
                </Main>
                <BigTitlte text="ABOUT" top="10%" left="5%" />
            </Box>
        </ThemeProvider>
        
    )
}

export default AboutPage;