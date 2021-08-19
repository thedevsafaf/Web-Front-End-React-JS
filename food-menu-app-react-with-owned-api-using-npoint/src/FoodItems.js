import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";
import styled from 'styled-components';

export default function FoodItems() {
    let [foodItems, setFoodItems] = useState([]);
    useEffect(() => {
        axios.get('https://api.npoint.io/f8bd41c34a0a48185759')
            .then(function (response) {
                // handle success
                console.log(response.data);
                setFoodItems(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, []);

    let renderFoodItems = () => {
        return foodItems.map((foodItem) => (
            <ListItem to={`/${foodItem.id}/`} key={foodItem.id}>
                <ItemTitle>Item : {foodItem.name}</ItemTitle>
                <PriceTitle>Price : {foodItem.price}</PriceTitle>
                <DescriptionTitle>Description : {foodItem.description}</DescriptionTitle>
                <QuantityTitle>Left out of Stock : {foodItem.qty}</QuantityTitle>
                <HorizontalLine></HorizontalLine>
            </ListItem>
        ));
    }


    return (

        <List>
            <Helmet>
                <title>Food Items | Zafe Cuisine</title>
            </Helmet>
            <ItemContainer>
                {renderFoodItems()}
            </ItemContainer>
        </List>
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
    padding:1%;
`;
const ListItem = styled(Link)`
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

