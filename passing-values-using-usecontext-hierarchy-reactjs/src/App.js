import React from 'react'
import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';
import ComponentC from './components/ComponentC';

export const UserContext = React.createContext();
export const EmailContext = React.createContext();

export default function App() {
  return (
    <div>
      <UserContext.Provider value="safaf">
        <EmailContext.Provider value="safaf.talrop@gmail.com">
          <ComponentA />
          <ComponentB />
          <ComponentC />
        </EmailContext.Provider>
      </UserContext.Provider>
    </div>
  )
}

