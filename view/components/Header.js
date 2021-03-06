import React from "react"
import OrgData from "../../model/data/orgData"


const h1Style = {
  
  fontFamily: '"Century Gothic", CenturyGothic, "AppleGothic", sans-serif',
  fontSize: "30px",
  padding: "5px 5px",
  textAlign: "center",
  textTransform: "uppercase",
  color: "#131313",
  // backgroundColor: "#e7e5e4",
  letterSpacing: ".15em",
  textShadow: "1px -1px 0 #767676, -1px 2px 1px #737272,-2px 4px 1px #767474, -3px 6px 1px #787777,-4px 8px 1px #7b7a7a" 
  }

const {orgName} = OrgData
const {moto} = OrgData

const Header = ()=>
		<div id="uno">
      <h1 style={h1Style}> {orgName}  </h1>
		
      <h3>{moto}</h3>
    
    </div>
	

export default Header	