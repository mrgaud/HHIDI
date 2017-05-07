import React from 'react'
import { Panel } from 'react-bootstrap'
const title = (
	<h1>Welcome To HHIDI</h1>
)
export default function ( ) {
	return (
		<div>
			<Panel header={title} bsStyle={'primary'}>
				Panel content
			</Panel>
		</div>
	)
}
