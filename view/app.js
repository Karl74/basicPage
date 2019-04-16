import React from "react"
import {render} from "react-dom"
import Header from "./components/Header"
import InfoBar from "./components/InfoBar"
import OrgData from "../model/data/orgData"
import NavParent from "./components/NavParent"

window.React = React


render(
	<Header/>, 
	document.getElementById("uno")
	)

const {generalInfo, leadership} = OrgData
const toInfobar = {...generalInfo, ...leadership}

render(<InfoBar props={toInfobar} />,
	document.getElementById("sidebar")
	)

render(<NavParent/>,
	document.getElementById("navComps")
	)
