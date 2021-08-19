import React,{useContext} from 'react'
import { UserContext,EmailContext } from '../App';

export default function ComponentE() {
    const username = useContext(UserContext);
    const email = useContext(EmailContext);
    return (
        <div>
            <h1>My name is {username} and my email is {email}</h1>
        </div>
    )
}
