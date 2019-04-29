import React from "react"

const Board =({detail})=>
	<div>
		<h1 style={{color:"#e600ac"}}>{detail.text.secName} </h1>
		<div>{detail.text.content.map((entry, i)=>
				<p className="entry" key={i}>{entry}</p>
			)}
		</div>
		
	</div>
export default Board