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

class Parent extends React.Component{
	constructor(){
		super();

		const {generalInfo, leadership} = OrgData
		const toInfobar = {...generalInfo, ...leadership}
		
		this.displayComponents = [
			<Header/>, 
			<InfoBar inform={toInfobar}/>,
			<Menu1 text={OrgData.Menu1} actn={this.myfunction}/>,
			<Menu2 text={OrgData.Menu2}/>,
			<Menu3 text={OrgData.Menu3}/>,
			<Menu4 text={OrgData.Menu4}/>,  
			<Menu5 text={OrgData.Menu5}/>,
			<div id="display"></div>
		]

		this.state = {
        showdata: this.displayComponents
        }

  	}

		
	render(){
		return (
			<div className="app-layout">
			{this.displayComponents}

			</div>
		)
	}

}

export default Parent