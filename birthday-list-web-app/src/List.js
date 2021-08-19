import React from 'react'

const List = (props) => {
	const { people } = props

	return people.map((person) => {
		const { id, name, age, image } = person
		return (
			<article key={id} className="person" style={{display: "flex",justifyContent: "center",alignItems: "center"}}>
				<img src={image} alt={name} width="80" hieght="80" style={{padding: "15px"}}/>
				<div>
					<h4 style={{color:"#1f223b",fontSize:"15px",letterSpacing:"1px",fontFamily: 'baloo_paaji_2regular',fontWeight: "bold"}}>{name}</h4>
					<p style={{color:"#868f9c",fontFamily: 'baloo_paaji_2regular',fontSize:"14px"}}>{age} years</p>
				</div>
			</article>
		)
	})
}

export default List