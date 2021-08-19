import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { Helmet } from "react-helmet";


export default function User({ match }) {
    const [user, setUser] = useState([]);
    console.log(match)

    useEffect(() => {
        
        axios
            .get(`https://reqres.in/api/users/${match.params.id}`)
            .then(function (response) {
                setUser(response.data.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    });
    return (
        <>  
            <Helmet>  
                <title>{user.first_name}</title>
             </Helmet>
            <Container>
                <Image src={user.avatar} alt={user.first_name} />
                <Heading>{user.first_name} {user.last_name}</Heading>
                <Para>{user.email}</Para>
            </Container>
        </>
    );
}

const Container = styled.div`
    background-color:#395498;
    width:1862px;
    height:100vh;
    padding:10%;
`

const Image = styled.img`
    border:2px solid #fff;
    border-radius:30px;
    width:150px;
    display:block;
`
const Heading = styled.h3`
    font-size:28px;
    color:white;
`
const Para = styled.p`
    color:white;
    font-size:19px;
`
