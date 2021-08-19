import React,{useState,useEffect} from 'react'

export default function MouseMove() {
    const [x,setX] = useState(0);
    const [y,setY] = useState(0);
    let logMousePositions = (e) => {
        console.log("Positions", e.clientX, e.clientY);
        setX(e.clientX);
        setY(e.clientY);
    };
    useEffect(()=>{
        console.log("UseEffect Called");
        window.addEventListener("mousemove", logMousePositions);

        return () => {
        console.log("Calling on Unmounting state");
        window.removeEventListener("mousemove", logMousePositions);    
        };
    },[]);
    return (
        <div>
            <h1> Mouse X Position : {x} </h1>
            <h1> Mouse Y Position : {y} </h1>
        </div>
    )
}
