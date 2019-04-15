import React from "react"
import OrgData from "../../model/data/orgData"


const InfoBar =({adress, phone}, {leaderName, leaderQuote, email})=>
	<div>
		<h1>{adress}</h1>
		
		<p>{phone}</p>

		<h1>{leaderName}</h1>
	
	</div>	

export default InfoBar








