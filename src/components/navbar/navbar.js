import React, { Component } from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
function NotLoggedIn(){
	return (
		<NavItem>Login</NavItem>
	)
}
function loggedIn(){
	return (
		<LinkContainer to='home'>
			<NavItem>Home</NavItem>
		</LinkContainer>
	)
}
function Navi({history}){

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
						{false?loggedIn():NotLoggedIn()}
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		)
}
export default Navi
