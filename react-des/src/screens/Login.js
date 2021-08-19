import React from 'react'
import styled from 'styled-components'

export default function Login() {
    return (
        <>
            <Heading>
                <Container>
                    <MenuIcon src={require("../images/menu.png").default}></MenuIcon>
                    <Title>Login</Title>
                </Container>
            </Heading>
            <FormContainer>
                <UserName placeholder="Username"></UserName>
                <Password placeholder="Password"></Password>
                <SubmitButton href="#">SUBMIT</SubmitButton>
                <Instruction>Not Registered yet, Register Now</Instruction>
                <RegisterButton href="#">REGISTER</RegisterButton>
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

const UserName = styled.input`
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
const RegisterButton = styled.a`
    padding:12px 16px;
    background:#32BCD4;
    display:inline-block;
    margin:20px auto;
    color:white;
    text-decoration:none;
`
