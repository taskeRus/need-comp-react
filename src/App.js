import React, { Component } from 'react'

import Select from './components/select/Select'
import Input from './components/input/Input'

class App extends Component {
	state = {
		list: [
			'a',
			'b',
			'c',
			'd',
			'e'
		],
		name: 'select-list'
	}

	choosenItem = (el) => {
	}

	password = (pass) => {
		console.log(pass)
	}

	render() {
		return (
			<div className="App">
				{/* <Select
					choosenItem={this.choosenItem}
					name={this.state.name}
					list={this.state.list}
				/> */}
				<Input
					type={'tel'}
					placeholder={'Email'}
					getTel={this.password}
				/>
			</div>
		)
	}
}

export default App
