import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Helmet } from "react-helmet";
import logo from '../../assets/images/logo.svg';
import marker from '../../assets/images/place.svg';

export default function Place({ match }) {
    const [place, setPlace] = useState([]);
    const [subPlace, setSubPlace] = useState([]);
    console.log(match)

    useEffect(() => {

        axios
            .get(`https://traveller.talrop.works/api/v1/places/view/${match.params.id}`)
            .then(function (response) {
                setPlace(response.data.data);
                setSubPlace(response.data.data.gallery);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);

    return (
        <>
            <Helmet>
                <title>{place.name + "| Moke Travel"}</title>
            </Helmet>
            <header style={{ display: "flex", justifyContent: "space-between", marginBottom: "60px" }}>
                <h1><a><img src={logo} /></a></h1>
                <a href="#" style={{ color: "white", backgroundColor: "#2B6BF7", margin: "30px 46px", display: "inline-block", padding: "12px 34px" }}>Login</a>
            </header>
            <div className="wrapper">
                <h1 style={{fontSize: "36px",marginBottom: "30px"}}>{place.name}</h1>
          
                    {/* <span style={{border:"1px solid #000",borderRadius: "30px",padding:"12px 24px"}}>{place.category_name}</span> */}
                    <div style={{display:"flex",marginBottom: "30px"}}>
                        <span style={{border:"1px solid #000",borderRadius: "30px",padding:"12px 24px",marginRight:"30px"}}>{place.category_name}</span>
                        <div style={{display:"inline-flex",alignItems: "center"}}>
                            <img src={marker}/>
                            <p style={{marginBottom:"5px",marginLeft:"10px",verticalAlign:"middle"}}>{place.location}</p>
                        </div>
                    </div>
                <div className="img-container" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gridGap: "5px",marginBottom:"20px"}}>
                    <img src={place.image} alt={place.name} style={{ width: "100%", display: "block" }} />
                    <ul style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gridGap: "5px" }}>
                        {subPlace.map((subPlaces) => (
                            <li style={{ width: "93%", margin: "0 20px 20px 20px" }} key={subPlaces.id}><img src={subPlaces.image} alt={subPlaces.name} style={{ width: "100%", display: "block" }} /></li>
                        ))}
                    </ul>
                </div>
                <h2 style={{marginBottom:"20px"}}>Place Details</h2>
                <p>{place.description}</p>
            </div>
        </>
    );
}

