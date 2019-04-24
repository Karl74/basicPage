import React from "react"
import OrgData from "../../model/data/orgData"

const footer={
	textAlign:"center",
	position:"fixed",
	bottom:0,
	color:"DarkBlue"
}

const InfoBar =({inform})=>
	<div>

		<h1>Welcome to our Community</h1>
		
		<i>{inform.leaderQuote}</i>

		<p>
			<strong>Pastor:</strong>
			<i> {inform.leaderName}</i><br/>
			<q>{inform.mensage}</q>
		</p>
		
		<h3>NewsLetter</h3>
		<p>{inform.newsletter}</p>
		<div style={footer}>
			<small>{inform.adress}</small><br/>
			<small>{inform.phone}</small>
		</div>
	</div>	

export default InfoBar








// <p>{inform.phone}</p>