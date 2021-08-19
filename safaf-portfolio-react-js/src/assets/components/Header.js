import React from 'react'
import styled from 'styled-components';
import { SocialIcon } from 'react-social-icons';

export default function Header() {
    return (
        <>
            <HeaderTop>
                <Container>
                    <NameTitle>Safaf</NameTitle>
                    <BioTitle>I'm a passionate<Role> Software Developer</Role></BioTitle>
                    <NavMenu>
                        <List>
                            <ListItem><Linking>Home</Linking></ListItem>
                            <ListItem><Linking>About</Linking></ListItem>
                            <ListItem><Linking>Resume</Linking></ListItem>
                            <ListItem><Linking>Services</Linking></ListItem>
                            <ListItem><Linking>Portfolio</Linking></ListItem>
                            <ListItem><Linking>Contact</Linking></ListItem>
                        </List>
                    </NavMenu>
                    <SocialLinks>
                        <SocialLink><SocialIcon url="https://twitter.com/" /></SocialLink>
                        <SocialLink><SocialIcon url="https://facebook.com/" /></SocialLink>
                        <SocialLink><SocialIcon url="https://instagram.com/" /></SocialLink>
                        <SocialLink><SocialIcon url="https://google-plus.com/" /></SocialLink>
                        <SocialLink><SocialIcon url="https://linkedin.com/" /></SocialLink>
                    </SocialLinks>
                </Container>
            </HeaderTop>
        </>
    )
}

<div class="social-links">
    <a href="#" class="twitter"><i class="icofont-twitter"></i></a>
    <a href="#" class="facebook"><i class="icofont-facebook"></i></a>
    <a href="#" class="instagram"><i class="icofont-instagram"></i></a>
    <a href="#" class="google-plus"><i class="icofont-skype"></i></a>
    <a href="#" class="linkedin"><i class="icofont-linkedin"></i></a>
</div>

const HeaderTop = styled.header`
    transition: ease-in-out 0.3s;
    position: relative;
    height: 100vh;
    display: flex;
    align-items: center;
    z-index: 997;
    overflow-y: auto;
`
const Container = styled.div`
    margin-right: 20%;
    margin-left:  20%;
    max-width: 960px;
    padding-right: 10px;
    padding-left:  10px; 
`

const NameTitle = styled.h1`
    font-size: 48px;
    margin: 0;
    padding: 0;
    line-height: 1;
    font-weight: 700;
    font-family: "Poppins", sans-serif;   
`
const BioTitle = styled.h2`
    font-size: 24px;
    margin-top: 20px;
    color: rgba(255, 255, 255, 0.8);
`
const Role = styled.span`
    color: #fff;
    border-bottom: 2px solid #18d26e;
    padding-bottom: 6px;
`
const NavMenu = styled.nav`
    margin-top: 35px;
`

const List = styled.ul`
    display: flex;
    margin-left: -30px;
    padding: 0;
    list-style: none;   
`

const ListItem = styled.li`
    margin-left: 30px;
    &:hover::a:before {
        visibility: visible;
        width: 25px;
    }
    &:hover::a{
        color: #fff;
        text-decoration: none;
    }
`
const Linking = styled.a`
    display: block;
    position: relative;
    color: rgba(255, 255, 255, 0.7);
    font-size: 16px;
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    &:before {
        content: "";
        position: absolute;
        width: 0;
        height: 2px;
        bottom: -4px;
        left: 0;
        background-color: #18d26e;
        visibility: hidden;
        width: 0px;
        transition: all 0.3s ease-in-out 0s;
    }
    &:hover::before {
        visibility: visible;
        width: 25px;
    }
    &:hover{
        color: #fff;
        text-decoration: none;
        cursor:pointer;
    }
`
const SocialLinks = styled.div``

const SocialLink = styled.a`
    margin:25px;
`


