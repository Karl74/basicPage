import React from "react"
import OrgData from "../../model/data/orgData"

const NavParent = ()=>
	
	<section id="navPar">
		<Menu1 props={OrgData.Menu1}/>

		<Menu2 props={OrgData.Menu2}/>

		<Menu3 props={OrgData.Menu3}/>

		<Menu4 props={OrgData.Menu4}/>
		
		<Menu5 props={OrgData.Menu5}/>

	</section>


export default NavParent

const Menu1 = ({props})=>

	<div id="compo1">
		<h2>{props.secName}</h2>
		<p>{props.info}</p>
	</div>



const Menu2 = ({props})=>

	<div id="compo2">
		<h2>{props.secName}</h2>
		<p>{props.info}</p>
	</div>

const Menu3 = ({props})=>

	<div id="compo3">
		<h2>{props.secName}</h2>
		<p>{props.info}</p>
	</div>

const Menu4 = ({props})=>

	<div id="compo4">
		<h2>{props.secName}</h2>
		<p>{props.info}</p>
	</div>

const Menu5 = ({props})=>

	<div id="compo5">
		<h2>{props.secName}</h2>
		<p>{props.info}</p>
	</div>			