import React from "react"
import Board from "./Board"
import {render} from "react-dom"

class Menu1 extends React.Component{
	displayBoard(){
		console.log("Hello Canada")
		render(<Board/>,
			document.getElementById("display"))
			
	}

	render(){
		return(
			<div onClick={this.displayBoard}>
				<h2>{this.props.text.secName}</h2>
				<p>{this.props.text.info}</p>
			</div>
			)
	}
}

export default Menu1