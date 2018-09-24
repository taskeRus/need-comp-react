import React, { Component, Fragment } from 'react'

import './InputText.css'

const ROOT_CLASS = 'need-comp-input-text'

class InputText extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    changeTextInput = (e) => {
        this.props.changeTextInput ? this.props.changeTextInput(e.target.value) : null
    }

    renderInput = () => {
        const inputField = 
            <input
                type={this.props.type}
                onChange={this.changeTextInput}
                placeholder={this.props.placeholder}
            />

        return inputField
    }

    render() {
        return (
            <Fragment>
                { this.renderInput() }
            </Fragment>
        )
    }
}

export default InputText