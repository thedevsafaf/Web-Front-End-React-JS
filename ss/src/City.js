import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router';

export default function City({ }) {
    const [city, setCity] = useState([]);
    const { id } = useParams();

    useEffect(() => {

        axios
            .get(`https://secure.drivezy.com/city/${id}`)
            .then(function (response) {
                setCity(response.data.response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);

    return (
        <>
            <div>
                <table border="2" style={{ margin: "50px auto" }}>
                    <tbody>
                        <tr>
                            <td>Name</td>
                            <td>Contact Person</td>
                            <td>Contact Number</td>
                            <td>Minimum Fuelless hours</td>
                            <td>Update at</td>
                        </tr>
                        <tr key={city.id}>
                            <td>{city.name}</td>
                            <td>{city.contact_person}</td>
                            <td>{city.contact_number}</td>
                            <td>{city.minimum_fuelless_hours}</td>
                            <td>{city.update_at}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}

