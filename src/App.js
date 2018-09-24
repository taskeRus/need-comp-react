import React, { Component } from 'react'
import Select from './components/select/Select'

class App extends Component {
	state = {
		list: [
			'a',
			'b',
			'c',
			'd',
			'e'
		]
	}

	choosenItem = (el) => {
	}

	render() {
		return (
			<div className="App">
				<Select 
					choosenItem={this.choosenItem}
					name={'select-list'}
					list={this.state.list}
				/>
			</div>
		)
	}
}

export default App
