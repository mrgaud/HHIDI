import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
	Panel,
	Form,
	FormGroup,
	FormControl,
	ControlLabel,
	Button
} from 'react-bootstrap'

function Login(props){
	console.log(props);
	return (
		<div>
			<Form>
				<FormGroup>
					<ControlLabel>Email</ControlLabel>
					<FormControl ></FormControl>
				</FormGroup>
			</Form>
		</div>
	);
}

export default connect(state => state)( Login );
