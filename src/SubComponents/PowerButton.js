import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
// import { PowerBtn } from "../Components/AllSvgs";
import { House } from "../Components/AllSvgs";

const Power =styled.button`
position: fixed;
top: 2rem;
left: 50%;
transform: translate(-50%,0);

backgroundColor: #FCF6F4;
padding: 0.3rem;
border-radius: 50%;
border: 1px solid #000;
width: 2.5rem;
height: 2.5rem;

display: flex;
justifyContent: center;
align-items:center;
z-index:3;
cursor: pointer;

&: hover{
    background-color: rgba(255,255,0,0.6);
    box-shadow: 0 0 8px 6px rgba(255,255,0,0.6);
}

&>*: first-child{
    text-decoration: none;
    color: inherit;
    
}
`

const PowerButton =()=>{
    return(
        <Power>
            <NavLink to ='/'>
            <House width={30} height={30} fill='currentColor'/>
            </NavLink>
        </Power>
    )
}

export default PowerButton