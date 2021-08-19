import React, { useState } from 'react';

// image upload using import method
import image1 from '../src/images/img-01.jpg'; 

export default function FunctionalComponents() {
    const [name, setName] = useState("Safaf");
    const [age, setAge] = useState(23);
    let initCount = 0;
    const [likes, setLikes] = useState(initCount);
    const handleClick = () => {
         setName("Nygil");
         setAge(22);
    }
    const resetFunction = () => {
        setLikes(initCount);
        setName("Safaf");
        setAge(23);
    }

    const increment1kLikes = () => {
        for (let i = 0; i <100; i++) {
            setLikes((prevState) => prevState + 10);
        }
    }
    return (
        <>
        <body style={{padding:"30px"}}>
        <h2>Playing with React Hooks</h2>
        <h1>Hi ReactJS Developer {name}. I think facebook detects your age as {age}</h1>
        {/* img upload via import */}
        <img src={image1} alt="image-01" width="400" height="600" style={{display:"block"}}/>
        {/* img upload via require */}
        <img src={require('../src/images/img-02.jpg').default} alt="image-01" width="400" height="400" style={{display:"block"}}/>
        {/* img upload via url */}
        <img src={"https://images.pexels.com/photos/3662119/pexels-photo-3662119.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"} alt="image-01" width="400" height="600" style={{display:"block"}}/>
        <h2 style={{color: "red",fontSize: "19px",textAlign: "center"}}> No of hearts for your post is {likes}</h2>
        <button onClick={() => setLikes(likes +1)} style={{color:"red",background:"black",fontSize:"24px",padding:"12px 24px",border:"2px solid black",marginRight:"15px"}}>&#128147;</button>
        <button onClick={() => resetFunction()} style={{color:"white",background:"black",fontSize:"24px",padding:"12px 24px",border:"2px solid black",marginRight:"15px"}}>Reset</button>
        <button onClick={() => handleClick()} style={{color:"white",background:"orangered",fontSize:"24px",padding:"12px 24px",border:"2px solid black",marginRight:"15px"}}>Update Name and Age</button>
        <button onClick={() => setLikes(likes -1)} style={{color:"white",background:"black",fontSize:"24px",padding:"12px 24px",border:"2px solid black"}}>&#128148;</button>
        <button onClick={() => increment1kLikes()} style={{color:"white",background:"black",fontSize:"24px",padding:"12px 24px",border:"2px solid black",marginLeft:"15px"}}>Give 1k hearts</button>
        </body>
        </>
    );
}


