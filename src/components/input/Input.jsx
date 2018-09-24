import React, { Component } from 'react'

import InputPassword from './input-password/InputPassword'
import InputText from './input-text/InputText'

import './Input.css'

const ROOT_CLASS = 'need-comp-input'

class Input extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    changePasswordInput = (value) => {
        this.props.getPassword ? this.props.getPassword(value) : null
    }

    changeTextInput = (value) => {
        this.props.getText ? this.props.getText(value) : null
    }

    renderInput = () => {
        let inputField

        switch (this.props.type) {
            case 'text':
                inputField =
                    <InputText
                        type={this.props.type}
                        changeTextInput={this.changeTextInput}
                        placeholder={this.props.placeholder}
                    />
                break;
            case 'password':
                inputField =
                    <InputPassword
                        changePasswordInput={this.changePasswordInput}
                        type={this.props.type}
                        placeholder={this.props.placeholder}
                    />
            default:
                break;
        }

        return inputField
    }

    render() {
        return (
            <div className={ROOT_CLASS}>
                { this.renderInput() }
            </div>
        )
    }
}

export default Input