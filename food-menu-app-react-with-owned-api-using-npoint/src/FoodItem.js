import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import { Helmet } from "react-helmet";
import styled from 'styled-components';

export default function FoodItem() {
    let [foodItem, setFoodItem] = useState([]);
    let { id } = useParams();
    useEffect(() => {
        axios
            .get(`https://api.npoint.io/f8bd41c34a0a48185759/${id}`)
            .then(function (response) {
                console.log(response.data);
                setFoodItem(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    });

    return (
        <>
            <List>
                <Helmet>
                    <title>{foodItem.name + " | Zafe Cuisine"}</title>
                </Helmet>

                <ItemContainer>
                    <ListItem key={foodItem.id}>
                        <ItemTitle>Item : {foodItem.name}</ItemTitle>
                        <PriceTitle>Price : {foodItem.price}</PriceTitle>
                        <DescriptionTitle>Description : {foodItem.description}</DescriptionTitle>
                        <QuantityTitle>Left out of Stock : {foodItem.qty}</QuantityTitle>
                        <HorizontalLine></HorizontalLine>
                    </ListItem>
                </ItemContainer>
            </List>
        </>
    )
}

const List = styled.ul`
background:#282A35;
padding:1% 2%;
height:100vh;
margin:0;
padding:50px;
`;
const ItemContainer = styled.div`
width:50%;
background:#252326;
margin:0 auto;
padding:9%;
background-color: rgba(0,0,0,0.1);
border-radius: 10px;
box-shadow: inset 0 50px rgba(255,255,255,0.2),
inset 0 -15px 30px rgba(0,0,0,0.4),
0 5px 10px rgba(0,0,0,0.5);
`;
const ListItem = styled.li`
    text-decoration:none;
`;
const ItemTitle = styled.h2`
color:#fff;
`;
const PriceTitle = styled.h3`
color:#d1a273;
`;
const DescriptionTitle = styled.p`
color:aqua;
width:100%;
font-size:20px;
`;
const QuantityTitle = styled.h4`
color:#d12a73;
`;
const HorizontalLine = styled.hr``;