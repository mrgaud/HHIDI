import React, { Component } from 'react';
import {connect} from 'react-redux'

import Navigation from './components/navbar/navbar.js'

import router from './router.js'

class App extends Component {
	render( ) {
		return (
			<div>
				<Navigation></Navigation>
				<div className='container'>
					{router}
				</div>
			</div>
		);
	}
}

// export default App;
export default connect(state => state, { })( App );
