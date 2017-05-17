import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import './landing.css'

import LandingLogin from './landingComponents/landingLogin.js'
import LandingText from './landingComponents/landingText.js'
import LandingSignup from './landingComponents/landingSignup.js'

class Landing extends Component {
	constructor( ) {
		super( )
		this.state = {
			logSin: true,
		}
        this.toggleLogSin = this.toggleSin.bind(this)
	}
    toggleSin(){
        this.setState({logSin:!this.state.logSin})
        console.log(this.state);
    }
	render( ) {
		return (
			<div>
				<Row id='landingContainer'>
					<Col sm={8}>
						<LandingText></LandingText>
					</Col>
					<Col sm={4}>
                        {this.state.logSin?<LandingLogin logSin={this.toggleLogSin}></LandingLogin>:<LandingSignup logSin={this.toggleLogSin}></LandingSignup>}
					</Col>
				</Row>
			</div>
		)
	}
}

export default Landing
