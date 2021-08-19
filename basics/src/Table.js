import React, {Component} from 'react';

const SimpleComponent = () => {
    return <div>Example</div>
  }

const TableHeader = () => {
    return(
        <thead>
            <tr>
                <th>Sl.no</th>
                <th>Name</th>
                <th>Phone </th>
            </tr>
        </thead>
    )
}

const TableBody = () => {
    return(
        <tbody>
            <tr>
                <td>1</td>
                <td>Safaf</td>
                <td>8606352583</td>
            </tr>
            <tr>
                <td>2</td>
                <td>Ajmal</td>
                <td>8086812560</td>
            </tr>
            <tr>
                <td>3</td>
                <td>Safwan</td>
                <td>9747423569</td>
            </tr>
            <tr>
                <td>4</td>
                <td>Ashik</td>
                <td>8129665719</td>
            </tr>
            <tr>
                <td>5</td>
                <td>Niyas</td>
                <td>9946101593</td>
            </tr>
        </tbody>
    )
}


class Table extends Component {
    render(){
        return(
            <table>
                <TableHeader/>
                <TableBody/>
                <SimpleComponent/>
            </table>
            
        )
    }
}
export default Table;