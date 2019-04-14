import React from "react"
import {render} from "react-dom"
import Header from "./components/Header"

window.React = React


render(
	<Header/>, 
	document.getElementById("uno")
	)