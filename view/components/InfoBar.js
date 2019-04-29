import React from "react"
import OrgData from "../../model/data/orgData"

const container ={
	display:"flex",
	flexDirection:"column",

}

const content={
	flexBasis:"90%"
}

const footer={
	flexBasis:"10%",
	color:"DarkBlue"
}

const InfoBar =({inform})=>
	<div id="sidebar" style={container}>
		<div style={content}>
			<h1>Welcome to our Community</h1>
			
			<i>{inform.leaderQuote}</i>

			<p>
				<strong>Pastor:</strong>
				<i> {inform.leaderName}</i><br/>
				<q>{inform.mensage}</q>
			</p>
			
			<h3>NewsLetter</h3>
			<p>{inform.newsletter}</p>
		</div>
			
		<div style={footer}>
			<small>{inform.adress}</small><br/>
			<small>{inform.phone}</small>
		</div>
	</div>	

export default InfoBar








// <p>{inform.phone}</p>