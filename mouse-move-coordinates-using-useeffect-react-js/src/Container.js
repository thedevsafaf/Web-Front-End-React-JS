import React,{useState} from 'react';
import MouseMove from './MouseMove';
export default function Container() {
    const [loading,setLoading] = useState(true);
    return (
        <>
          {loading && <MouseMove />}
          <button onClick = {() => setLoading(!loading)}>Toggle Load</button>  
        </>
    )
}
