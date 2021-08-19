import React from 'react'
import styled from 'styled-components'

export default function Register() {
    return (
        <>
            <Heading>
                <Container>
                    <MenuIcon src={require("../images/menu.png").default}></MenuIcon>
                    <Title>Register</Title>
                </Container>
            </Heading>
            <FormContainer>
                <FirstName placeholder="First Name"></FirstName>
                <LastName placeholder="Last Name"></LastName>
                <Email placeholder="Email"></Email>
                <Password placeholder="Password"></Password>
                <SubmitButton href="#">SUBMIT</SubmitButton>
                <Instruction>Already Registered, Go to Login</Instruction>
                <LoginButton href="#">LOGIN</LoginButton>
            </FormContainer>
        </>
    )
}

const Heading = styled.header`
    height:80px;
    background:#32BCD4;
`
const Container = styled.div`
    padding:20px;
    display:flex;
`

const MenuIcon = styled.img`
    display:block;
    width:40px;
`
const Title = styled.div`
    margin: 0 auto;
    color:white;
    font-size:30px;
    display:inline-block;
`
const FormContainer = styled.div`
    display:flex;
    flex-direction:column;
    margin:80px auto;
    width:30%;
    border: none;

`

const FirstName = styled.input`
    background-color: transparent;
    border-style:none;
    outline:none;
    border-bottom: 1px solid #999;
    margin-bottom:40px;
    font-size:22px;
`
const LastName = styled.input`
    background-color: transparent;
    border-style:none;
    outline:none;
    border-bottom: 1px solid #999;
    margin-bottom:40px;
    font-size:22px;
`
const Email = styled.input`
    background-color: transparent;
    border-style:none;
    outline:none;
    border-bottom: 1px solid #999;
    margin-bottom:40px;
    font-size:22px;
`
const Password = styled.input`
    background-color: transparent;
    border-style:none;
    outline:none;
    border-bottom: 1px solid #999;
    margin-bottom:40px;
    font-size:22px;
`
const SubmitButton = styled.a`
    padding:12px 16px;
    background:#32BCD4;
    display:inline-block;
    margin:20px auto;
    color:white;
    text-decoration:none;
`
const Instruction = styled.p`
    color:black;
    font-size:18px;
    text-align:center;
`
const LoginButton = styled.a`
    padding:12px 16px;
    background:#32BCD4;
    display:inline-block;
    margin:20px auto;
    color:white;
    text-decoration:none;
`
