import React, {Component} from 'react'
import {Row, Col} from 'react-bootstrap'
import './landing.css'

import LandingLogin from './landingComponents/landingLogin.js'
import LandingText from './landingComponents/landingText.js'

class Landing extends Component{
    render(){
        return(
            <Row id='landingContainer'>
                <Col sm={8}>
                    <LandingText></LandingText>
                </Col>
                <Col sm={4}>
                    <LandingLogin></LandingLogin>
                </Col>
            </Row>
        )
    }
}

export default Landing
