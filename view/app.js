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

render(<Menu2 text={OrgData.Menu2}/>,
	document.getElementById("compo2")
	)

render(<Menu3 text={OrgData.Menu3}/>,
	document.getElementById("compo3")
	)

render(<Menu4 text={OrgData.Menu4}/>,
	document.getElementById("compo4")
	)

render(<Menu5 text={OrgData.Menu5}/>,
	document.getElementById("compo5")
	)

