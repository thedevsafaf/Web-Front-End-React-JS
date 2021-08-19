import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Helmet } from "react-helmet";
import logo from '../../assets/images/logo.svg';
import marker from '../../assets/images/place.svg';

export default function Places() {

    const [places, setPlaces] = useState([]);

    useEffect(() => {
        axios.
            get('https://traveller.talrop.works/api/v1/places/')
            .then(function (response) {
                // handle success
                setPlaces(response.data.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    }, []);

    let renderPlaces = () => {
        return places.map((place) => (
            <li style={{ width: '25%',marginBottom:"40px"}}>
                <Link to={`/place/${place.id}`}>
                    <img src={place.image} alt={place.name} style={{ width: "400px", height: "200px", display: "inline-block",borderTopLeftRadius:"30px",borderTopRightRadius:"30px",marginBottom:"20px"}} />
                    <h2 style={{marginBottom:"10px"}}>{place.name}</h2>
                    <div style={{display:"flex"}}>
                        <img src={marker}/>
                        <p style={{marginBottom:"5px",marginLeft:"10px"}}>{place.location}</p>
                    </div>
                    
                </Link>
            </li>
        ));
    }

    return (
        <>
            <Helmet>
                <title>Places | Moke Travel</title>
            </Helmet>
            <header style={{display:"flex",justifyContent:"space-between",marginBottom:"60px"}}>
                <h1><a><img src={logo} /></a></h1>
                <a href="#" style={{color:"white",backgroundColor:"#2B6BF7",margin:"30px 46px", display: "inline-block",padding: "12px 34px"}}>Login</a>
            </header> 
            <h1 style={{marginBottom:"20px"}}>Welcome</h1>
            <p style={{marginBottom:"50px",color:"#999"}}>Explore the world around you</p>
            <ul style={{ display: "flex", flexWrap: "wrap"}}>{renderPlaces()}</ul>
        </>
    )
}