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

class SignUp extends Component {
	constructor( {logSin} ) {
		super( {logSin} );
		this.state = {
			firstName: '',
			lastName: '',
			email: '',
			password: '',
			passwordConfirm: ''
		};
		this.handleFirstNameChange = this.handleChange.bind(this, 'firstName')
		this.handleLastNameChange = this.handleChange.bind(this, 'lastName')
		this.handleEmailChange = this.handleChange.bind(this, 'email')
		this.handlePasswordChange = this.handleChange.bind(this, 'password')
		this.handlePasswordConfirmChange = this.handleChange.bind(this, 'passwordConfirm')
		this.toggleSin = function(){
			logSin()
		}
	};
	handleChange( field, event ) {
		this.setState({ [ field ]: event.target.value });
	};
	render( ) {
		const { firstName, lastName, email, password, passwordConfirm } = this.state;
		return (
			<div>
				<Panel header={< h3 > Sign Up < /h3 >} bsStyle='primary'>
					<Form>
						<FormGroup>
							<ControlLabel>First Name</ControlLabel>
							<FormControl type='text' value={firstName} onChange={this.handleFirstNameChange}></FormControl>
						</FormGroup>
						<FormGroup>
							<ControlLabel>Last Name</ControlLabel>
							<FormControl type='text' value={lastName} onChange={this.handleLastNameChange}></FormControl>
						</FormGroup>
						<FormGroup>
							<ControlLabel>Email</ControlLabel>
							<FormControl type='email' value={email} onChange={this.handleEmailChange}></FormControl>
						</FormGroup>
						<FormGroup>
							<ControlLabel>Password</ControlLabel>
							<FormControl type='password' value={password} onChange={this.handlePasswordChange}></FormControl>
						</FormGroup>
						<FormGroup>
							<ControlLabel>Confirm Password</ControlLabel>
							<FormControl type='password' value={passwordConfirm} onChange={this.handlePasswordConfirmChange}></FormControl>
						</FormGroup>
						<FormGroup>
							<a className='pointer' onClick={this.toggleSin}>Don't Have An Account?</a><br/>
							<Button bsStyle='primary' onClick={()=>alert(firstName+' '+lastName)}>Create Account</Button>
						</FormGroup>
					</Form>
				</Panel>
			</div>
		);
	};
};

export default connect( state => state )( SignUp )
