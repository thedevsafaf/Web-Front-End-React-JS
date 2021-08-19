import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export default function CardForgotPass() {
    return (
        <>
          <Container>
            <Card>
                <TabContainer>
                    <Linking to={`/login`}><Tab1>Login</Tab1></Linking>
                    <Linking to={`/`}><Tab2>Signup</Tab2></Linking>
                </TabContainer>
                <InputContainer>
                    <Label>Enter Registered Email</Label>
                    <Email></Email>
                </InputContainer>
                <SendButton href="#">Send</SendButton>
                <TempLabel>You will get a temporary password, Try to Login with the same</TempLabel>
            </Card>
         </Container>  
        </>
    )
}

const Container = styled.div`
    background:#42C582;
    height:981px;
    margin:0px;
    display:flex;
    align-items:center;
    justify-content:center;
`;

const Card =styled.div`  
    width:20%;
    background:#2E3137;
    height:500px;
    border-radius:30px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`;
const TabContainer = styled.div`
    display:flex;
`


const Tab1 = styled.h2`
    color:white;
    font-size:18px;
    font-weight:400;
    text-decoration:none;
    margin-right:50px;
    margin-bottom:30px;
    border-bottom:3px solid #999;
    &:hover{
        border-bottom:3px solid #fff;
    }
`

const Tab2 = styled.h2`
    color:white;
    font-size:18px;
    font-weight:400;
    text-decoration:none;
    margin-bottom:30px;
    border-bottom:3px solid #999;
    &:hover{
        border-bottom:3px solid #fff;
    }
`

const InputContainer= styled.div`
    display:flex;
    flex-direction:column;
    margin-bottom:30px;
`
const Linking = styled(Link)`
    color:#58636B;
    margin-bottom:5px;
    text-decoration: none;
`

const Label = styled.span`
    color:#58636B;
    margin-bottom:5px;
`

const Email = styled.input`
    background-color:#545D6A ;
    color:white;
    border-style:none;
    border-radius:5px;
    font-size:20px;
`

const SendButton = styled.a`
    padding:8px 12px;
    width:40%;
    color:white;
    text-align:center;
    background:#42C582;
    display:inline-block;
    text-decoration:none;
    border-radius:5px;
`
const TempLabel = styled.span`
    color:#999;
    margin-top:15px;
    line-height:1.6em;
    font-size:14px;
    max-width:80%;
    text-align:center;
`

