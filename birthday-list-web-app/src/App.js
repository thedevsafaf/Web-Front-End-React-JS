import React, { useState } from 'react'
import data from './data'
import List from './List'
import './App.css'
function App() {

	const [people, setPeople] = useState(data)

	function clearAllRecords() {
		setPeople([])
	}
	return (
		<main>
			<section className="container">
				<h3 style={{display: "flex",justifyContent: "center",alignItems: "center",fontSize:"20px",fontFamily:"baloo_paaji_2bold",padding:"40px"}}>{people.length} birthdays today</h3>
				<List people={people} />
				<a style={{display: "inline-block",fontSize:"24px",color: "white",padding:"8px 70px",width:"14%",backgroundColor:"#d43d94",textAlign:"center",margin:"auto 45%",fontFamily: 'baloo_paaji_2regular'}} onClick={clearAllRecords}>Clear All</a>
			</section>
		</main>
	)
}
// #1f223b dark blue
// #d43d94 rose
// #868f9c light gray

export default App