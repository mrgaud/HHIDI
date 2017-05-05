import React, { Component } from 'react'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'
import {Redirect} from 'react-router-dom'

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
						<NavItem onClick={()=>console.log(history)}>Stuff</NavItem>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		)
}
export default Navi
