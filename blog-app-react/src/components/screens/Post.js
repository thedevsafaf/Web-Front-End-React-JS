import React, { useState, useEffect } from 'react';
import axios from "axios";
import logo from "../../assets/images/moke..png";
import twitter from "../../assets/images/twitter.png";
import insta from "../../assets/images/instagram.png";
import { useParams } from 'react-router-dom';
import { Helmet } from "react-helmet";

export default function Post() {
    const [post, setPost] = useState([]);
    const [author,setAuthor] = useState({});
    const { id } = useParams();

    useEffect(() => {
        axios
            .get(`https://traveller.talrop.works/api/v1/blog/article/${id}`)
            .then(function (response) {
                setPost(response.data.data);
                setAuthor(response.data.data.author)
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);

    return (
        <>  
            <Helmet>
                <title>{author.name}</title>
            </Helmet>
            <header
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-around",
                    marginBottom: "60px",
                    background: "white",
                }}
            >
                <h1>
                    <a>
                        <img src={logo} />
                    </a>
                </h1>
                <nav>
                    <ul style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <li><a href="#">Get Signal</a></li>
                        <li><a href="#">Support</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Developers</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Donate</a></li>
                        <li><a href="#"><img src={twitter} /></a></li>
                        <li><a href="#"><img src={insta} /></a></li>
                    </ul>
                </nav>
            </header>
            <li key={post.id} style={{ width: "80%", padding: "1%", margin: "0 auto",listStyleType:"none"}}>
                <div
                    style={{
                        backgroundColor: "white",
                        width: "100%",
                        padding: "10%",
                    }}
                >
                    <img
                        src={require(`../../assets/images/image${id - 1}.png`).default}
                        style={{
                            width: "100px",
                            height: "100px",
                            margin: "-19% auto 4%",
                            display: "block",

                        }}
                    />
                    <h2
                        style={{
                            textAlign: "center",
                            fontSize: "26px",
                            lineHeight: "1.6em",
                            maxWidth: "96%",
                            marginBottom: "30px",
                            fontFamily: "poppinsregular",
                            fontWeight: "600",
                        }}
                    >
                        {post.title}
                    </h2>
                    <h3
                        style={{
                            textAlign: "center",
                            marginBottom: "30px",
                            fontFamily: "poppinsregular",
                            fontSize: "19px",
                        }}
                    >
                    <span className="blue-text">{author.name}</span>    
                    <span className="gray-text">{" on " + post.posted_date}</span>    
                    </h3>
                    <p style={{ fontFamily: "poppinsregular", fontSize: "16px" }}>
                        {post.description}
                    </p>
                </div>
            </li>
        </>
    )
}
