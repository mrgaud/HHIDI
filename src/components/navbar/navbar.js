import React, { Component } from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import {connect} from 'react-redux'
import {login} from '../../ducks/user.js'
function NotLoggedIn(){
	return (
		<NavItem onClick={()=>login()}>Login</NavItem>
	)
}
function loggedIn(){
	return (
		<LinkContainer to='home'>
			<NavItem>Home</NavItem>
		</LinkContainer>
	)
}
function Navi(props){
		console.log(props)
		return (
			<Navbar inverse collapseOnSelect>
				<Navbar.Header>
					<Navbar.Brand>
						<a href="#">HHIDI</a>
					</Navbar.Brand>
					<Navbar.Toggle/>
				</Navbar.Header>
				<Navbar.Collapse>
					<Nav pullRight>
						{props.user?loggedIn():NotLoggedIn()}
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		)
}
export default connect(state => state, { })( Navi );
