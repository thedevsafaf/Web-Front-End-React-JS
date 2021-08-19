import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Cities() {
  let [cities, setCities] = useState([]);
  useEffect(() => {
    axios.get('https://secure.drivezy.com/city')
      .then(function (response) {
        // handle success
        console.log(response.data.response);
        setCities(response.data.response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }, [])

  return (
    <div className="App">
      <table border="2" style={{ margin: "50px auto" }}>
        <tbody>
          <tr>
            <td>Name</td>
            <td>Contact Person</td>
            <td>Contact Number</td>
            <td>Minimum Fuelless hours</td>
            <td>Update at</td>
          </tr>

          {
            cities.map(city => {
              return <tr key={city.id}>
                <td>{city.name}</td>
                <td>{city.contact_person}</td>
                <td>{city.contact_number}</td>
                <td>{city.minimum_fuelless_hours}</td>
                <td><Link to={`/city/${city.id}/`} style={{ background: "yellow", width: "100px", marginLeft: "30px" }}>VIEW_DATA</Link></td>
              </tr>

            })
          }
        </tbody>
      </table>
    </div>
  );
}
export default Cities;
