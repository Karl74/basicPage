import React from "react"
import {render} from "react-dom"
import Header from "./components/Header"
import InfoBar from "./components/InfoBar"
import OrgData from "../model/data/orgData"
import components from "./components/NavParent"
import Menu1 from "./components/Menu1"

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

// //////////////////////////////////////////////////////



render(<Menu1 text={OrgData.Menu1}/>,
	document.getElementById("compo1")
	)

render(<components.Menu2 props={OrgData.Menu2}/>,
	document.getElementById("compo2")
	)

render(<components.Menu3 props={OrgData.Menu3}/>,
	document.getElementById("compo3")
	)

render(<components.Menu4 props={OrgData.Menu4}/>,
	document.getElementById("compo4")
	)

render(<components.Menu5 props={OrgData.Menu5}/>,
	document.getElementById("compo5")
	)

