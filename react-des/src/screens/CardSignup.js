import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export default function CardSignup() {
    return (
        <>
          <Container>
            <Card>
                <TabContainer>
                    <Linking to={`/login`}><Tab1>Login</Tab1></Linking>
                    <Linking to={`/`}><Tab2>Signup</Tab2></Linking>
                </TabContainer>
                <InputContainer>
                    <Label>Full Name</Label>
                    <FullName></FullName>
                </InputContainer>
                <InputContainer>
                    <Label>Email</Label>
                    <Email></Email>
                </InputContainer>
                <InputContainer>
                    <Label>Password</Label>
                    <Password type="password"></Password>
                </InputContainer>
                <InputContainer>
                    <Label>Retype Password</Label>
                    <RetypePassword type="password"></RetypePassword>
                </InputContainer>
                <SubmitButton href="#">Submit</SubmitButton>
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
    text-decoration:none;
`

const FullName = styled.input`
    background-color:#545D6A ;
    color:white;
    border-style:none;
    border-radius:5px;
    font-size:20px;
`
const Email = styled.input`
    background-color:#545D6A ;
    color:white;
    border-style:none;
    border-radius:5px;
    font-size:20px;
`
const Password = styled.input`
    background-color:#545D6A ;
    color:white;
    border-style:none;
    border-radius:5px;
    font-size:20px;
    
`
const RetypePassword = styled.input`
    background-color:#545D6A ;
    color:white;
    border-style:none;
    border-radius:5px;
    font-size:20px;
    
`
const SubmitButton = styled.a`
    padding:8px 12px;
    width:40%;
    color:white;
    text-align:center;
    background:#42C582;
    display:inline-block;
    text-decoration:none;
    border-radius:5px;
`

