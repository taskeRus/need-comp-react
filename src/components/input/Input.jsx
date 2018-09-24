import React, { Component, Fragment } from 'react'

import InputPassword from './input-password/InputPassword'
import InputText from './input-text/InputText'
import InputEmail from './input-email/InputEmail'
import InputTel from './input-tel/InputTel'

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

    changeEmailInput = (value) => {
        this.props.getEmail ? this.props.getEmail(value) : null
    }

    changeTelInput = (value) => {
        this.props.getTel ? this.props.getTel(value) : null
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
                break
            case 'password':
                inputField =
                    <InputPassword
                        changePasswordInput={this.changePasswordInput}
                        type={this.props.type}
                        placeholder={this.props.placeholder}
                    />
                break
            case 'email':
                inputField =
                    <InputEmail
                        type={this.props.type}
                        placeholder={this.props.placeholder}
                        changeEmailInput={this.changeEmailInput}
                    />
                break
            case 'tel':
                inputField =
                    <InputTel
                        type={this.props.type}
                        placeholder={this.props.placeholder}
                        changeTelInput={this.changeTelInput}
                    />
                break
            default:
                inputField =
                    <h1>Данный тип не поддерживается</h1>
                break
        }

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

export default Input