import React from "react"
import Board from "./Board"
import {render} from "react-dom"

class Menu1 extends React.Component{
	constructor(props){
		super(props);
		this.displayBoard = this.displayBoard.bind(this)
	}

	displayBoard(){
		console.log(this.props)
		render(<Board newText="Canada alli vamos" detail={this.props} style={{background:"white"}}/>,
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