import React, { Component } from 'react'

import './InputPassword.css'

const ROOT_CLASS = 'need-comp-input-password'

class InputPassword extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isCurrentPassword: null,
            valuePassword: '',
            minLength: this.props.minLength || 0,
            maxLength: this.props.maxLength || 10
        }
    }

    changePasswordInput = (e) => {
        e.target.value.length > +this.state.minLength && e.target.value.length <= +this.state.maxLength ?
            this.setState({ isCurrentPassword: true, password: e.target.value }) :
            this.setState({ isCurrentPassword: false, password: e.target.value })

        this.props.changePasswordInput ? this.props.changePasswordInput(e.target.value) : null
    }

    renderInput = () => {
        const classCheckPassword = 
            this.state.isCurrentPassword !== null ? 
                this.state.isCurrentPassword ? 
                    `${ROOT_CLASS}__password-success` : 
                    `${ROOT_CLASS}__password-error` : 
                ''

        const inputField = 
            <input
                className={`${ROOT_CLASS}__password ${classCheckPassword}`}
                onChange={this.props.changePasswordInput}
                type={this.props.type}
                placeholder={this.props.placeholder}
            />

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

export default InputPassword