import React from "react"
import Board from "./Board"
import {render} from "react-dom"

class Menu5 extends React.Component{
	constructor(props){
		super(props);
		this.displayBoard = this.displayBoard.bind(this)
	}

	displayBoard(){
		console.log(this.props)
		render(<Board newText="Lo logramos!!!" detail={this.props}/>,
			document.getElementById("display"))	
	}

	render(){
		const pSty={
			color: "white"	
		}

		return(
			<div id="compo5" onClick={this.displayBoard} className="menuItem"
			 style={{backgroundImage:"url(./view/images/EInterior2.jpg)"}}>
				<h2>{this.props.text.secName}</h2>
				<p style={pSty}>{this.props.text.info}</p>
			</div>
			)
	}
}

export default Menu5