import React, {Component} from 'react'
import {Row, Col} from 'react-bootstrap'

import LandingText from './landingComponents/landingText.js'
import LandingLogin from './landingComponents/landingLogin.js'

class Landing extends Component{
    render(){
        return(
            <Row>
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
