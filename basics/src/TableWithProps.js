import React, {Component} from 'react';

const TableHeader = () => {
    return(
        <thead>
            <tr>
                <th>name</th>
                <th>job</th>
            </tr>
        </thead>
    )
}

const TableBody = (props) => {
    const rows = props.characterData.map((row, index) => {
      return (
        <tr key={index}>
          <td>{row.name}</td>
          <td>{row.job}</td>
        </tr>
      )
    })
  
    return <tbody>{rows}</tbody>
}  


class TableWithProps extends Component {
    render(){
        const characterData = this.props
        return(
            <table>
                <TableHeader/>
                <TableBody characterData = {characterData} />
            </table>
            
        )
    }
}
export default TableWithProps;