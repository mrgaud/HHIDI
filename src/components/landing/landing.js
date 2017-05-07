import React, {Component} from 'react'
import {Row, Col} from 'react-bootstrap'

import LandingText from './landingComponents/landingText.js'

class Landing extends Component{
    render(){
        return(
            <Row>
                <Col sm={8}>
                    <LandingText></LandingText>
                </Col>
            </Row>
        )
    }
}

export default Landing
