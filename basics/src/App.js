import React, {Component} from 'react';
import TableWithProps from './TableWithProps';

export default class App extends Component{
  render(){
    const characters = [
      {
        name:'safaf',
        job:'software engineer',
      },
      {
        name:'safwan',
        job:'mechanical engineer',
      },
      {
        name:'niyas',
        job:'biomedical engineer',
      },
      {
        name:'ashik',
        job:'doctor',
      },
      {
        name:'ajmal',
        job:'architect',
      },
    ]
    return(
      <div className="container">
        <TableWithProps characterData={characters} />
      </div>
    )
  }
}