import React from "react"
import {render} from "react-dom"
import Header from "./components/Header"
import InfoBar from "./components/InfoBar"
import OrgData from "../model/data/orgData"
import Menu1 from "./components/Menu1"
import Menu2 from "./components/Menu2"
import Menu3 from "./components/Menu3"
import Menu4 from "./components/Menu4"
import Menu5 from "./components/Menu5"

class Parent extends React.component{
	constructor(){
		super()

		
	}


	aFunction(){
		let one="doNoting"
	}

	render(){
		return(
			<div>"hello guys"</div>
			)
	}
}//end of class


export default Parent