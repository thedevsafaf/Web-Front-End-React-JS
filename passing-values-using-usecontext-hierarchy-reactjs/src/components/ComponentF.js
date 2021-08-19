import React from 'react'
import { UserContext,EmailContext } from '../App';
export default function ComponentF() {
    return (
        <div>
            <UserContext.Consumer>
                {(username) => (
                    <EmailContext.Consumer>
                        {(email) => (
                            <h1>My name is {username} and my email is {email}</h1>
                        )}
                    </EmailContext.Consumer>
                )}
            </UserContext.Consumer>
        </div>    
    ); 
}


