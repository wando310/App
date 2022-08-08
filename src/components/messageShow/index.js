import React from "react"
import styled from "styled-components/native"

export const Container_principal = styled.View`
    width:100%;
    position:absolute ;
    z-index:1 ;
    top: ${(props) => props.size}px;
    align-items:center ;
`
export const Container_Show = styled.View`
    width:90%;
    background-color: #fff;
    padding: 15px 30px;
    border-radius:10px;
    border-left-width: 8px;
    border-color:red;
`
export const Container_image = styled.View`
   display:flex;
   flex-direction:row ;
   width:100% ; 
`
export const H1 = styled.Text`
    font-size:20px;
    font-weight:bold ;
`
export const P = styled.Text`
    margin-left:50px;
    color: #adb5bd ;
`
export const Imgalert = styled.Image`
    width:30px;
    height:30px;
    margin-right:20px ;
`

export default function modalShowMwssage({ show }) {
    return (

        <Container_principal size={show} >
            <Container_Show>
                <Container_image>
                    <Imgalert source={require('../../../assets/image/warning.png')} />
                    <H1>Atenção</H1>
                </Container_image>
                <P>Seu carrinho esta Vazio</P>
            </Container_Show>
        </Container_principal>

    )
}
