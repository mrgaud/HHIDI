import React, { Component } from 'react'
import { connect } from 'react-redux'

function Login( props ) {
	console.log( props );
	return (
		<div>
			stuff
		</div>
	)
}

export default connect(state => state, { })( Login )
