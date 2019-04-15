import React from "react"
import {render} from "react-dom"
import Header from "./components/Header"
import InfoBar from "./components/InfoBar"
import OrgData from "../model/data/orgData"

window.React = React


render(
	<Header/>, 
	document.getElementById("uno")
	)

const {generalInfo, leadership} = OrgData


render(<InfoBar {...generalInfo} />,
	document.getElementById("sidebar")
	)