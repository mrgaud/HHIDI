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
import {login} from '../../../ducks/user.js'
import '../landing.css'

const title = (<h3>Login</h3>)
class Login extends Component{
	constructor({logSin}){
		super({logSin})
		this.state = {
			email: '',
			password:''
		}
		this.handleEmailChange = this.handleChange.bind(this, 'email')
		this.handlePassswordChange = this.handleChange.bind(this, 'password')
		this.toggleSin = function(){
			logSin()
		}
	}

	handleChange( field, event ) {
		this.setState( { [field]: event.target.value } );
	}

	render(){
		const {email, password} = this.state
		return (
			<div>
				<Panel header={title} bsStyle='primary'>
					<Form>
						<FormGroup>
							<ControlLabel>Email</ControlLabel>
							<FormControl type='text' value={email} onChange={this.handleEmailChange}></FormControl>
						</FormGroup>
						<FormGroup>
							<ControlLabel>Password</ControlLabel>
							<FormControl type='password' value={password} onChange={this.handlePassswordChange}></FormControl>
						</FormGroup>
						<FormGroup>
							<a className='pointer' onClick={this.toggleSin}>Don't Have An Account?</a><br/>
							<Button bsStyle='primary' onClick={()=>login(email, password)}>Submit</Button>
						</FormGroup>
					</Form>

				</Panel>
			</div>
		);
	}
}

export default Login
