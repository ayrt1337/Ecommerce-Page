import React from "react";
import styled from "styled-components";
import Close from '../../images/icon-close-black.svg'
import { useMediaQuery } from "react-responsive";

const SideBar = props => {
    const for750Width = useMediaQuery({query: '(max-width: 750px)'})
    const for500Width = useMediaQuery({query: '(max-width: 500px)'})

    return(
        <>
            <DivOverlay />

            {!for750Width &&
               <Div>  
                    <img onClick={() => {
                        props.setShowSideBar(false)
                    }} src={Close} style={{cursor: 'pointer', width: '17px', height: '17px', marginBottom: '20px'}}></img>

                    <P>Collections</P>
                    <P>Men</P>
                    <P>Women</P>
                    <P>About</P>
                    <P>Contact</P>
                </Div>
            }

            {(for750Width && !for500Width) && 
                <Div style={{width: '250px', paddingLeft: '30px'}}>  
                    <img onClick={() => {
                        props.setShowSideBar(false)
                    }} src={Close} style={{cursor: 'pointer', width: '17px', height: '17px', marginBottom: '20px'}}></img>

                    <P style={{fontSize: '18px'}}>Collections</P>
                    <P style={{fontSize: '18px'}}>Men</P>
                    <P style={{fontSize: '18px'}}>Women</P>
                    <P style={{fontSize: '18px'}}>About</P>
                    <P style={{fontSize: '18px'}}>Contact</P>
                </Div>
            }

            {for500Width && 
                <Div style={{width: '200px', paddingLeft: '25px'}}>  
                    <img onClick={() => {
                        props.setShowSideBar(false)
                    }} src={Close} style={{cursor: 'pointer', width: '17px', height: '17px', marginBottom: '10px'}}></img>

                    <P style={{fontSize: '16px'}}>Collections</P>
                    <P style={{fontSize: '16px'}}>Men</P>
                    <P style={{fontSize: '16px'}}>Women</P>
                    <P style={{fontSize: '16px'}}>About</P>
                    <P style={{fontSize: '16px'}}>Contact</P>
                </Div>
            }
        </>
    )
}

const Div = styled.div`
    position: absolute;
    background-color: white;
    z-index: 999;
    width: 350px;
    height: 100%;
    padding: 45px 0px 0px 40px;
`

const DivOverlay = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 10;
`

const P = styled.p`
    font-weight: 600;
    cursor: pointer;
    font-size: 20px;
    margin-top: 25px;
`

export default SideBar