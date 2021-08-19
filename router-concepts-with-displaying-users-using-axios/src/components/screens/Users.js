import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Helmet } from "react-helmet";
import Slider from "react-slick";



export default function Users() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: true,
      };

    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.
            get('https://reqres.in/api/users')
            .then(function (response) {
                // handle success
                setUsers(response.data.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, []);

    let renderUsers = () => {
        return users.map((user) => (
            <ListItem>
                <Link to={`/user/${user.id}`}>
                    {console.log('USER', user.id)}
                    <ListImage src={user.avatar} alt={user.first_name} />
                    <ListTitle>{user.first_name} {user.last_name}</ListTitle>
                    <ListContent>{user.email}</ListContent>
                </Link>
            </ListItem>
        ));
    }

    return (
        <>  
            <Helmet>  
                <title>Site Users</title>
             </Helmet>
            <Heading>Users of our Website</Heading>
            <Container>
                <Slider {...settings}>{renderUsers()}</Slider>
            </Container>
            
        </>
    )
}

const Heading = styled.h1`
    color:green;
    background:#f4f5f7;
    padding:2%;
    font-size:40px;
    text-align:center;
`
const Container = styled.div`
    width:90%;
    max-width:1200px;
    margin: 0 auto;
    text-align:center;
`
//Slider Div
const ListItem = styled.div`
`
const ListImage = styled.img`
    border-radius:30px;
    border:10px ridge #662151;
    margin:0 auto;
`
const ListTitle = styled.h3`
`

const ListContent = styled.p``

