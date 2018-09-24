import React, { Component, Fragment } from 'react'

import './InputEmail.css'

const ROOT_CLASS = 'need-comp-input-email'

class InputEmail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            isCurrentEmail: null
        }
    }

    _validateEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    changeEmailInput = (e) => {
        this._validateEmail(e.target.value) ?
            this.setState({ isCurrentEmail: true, email: e.target.value }) :
            this.setState({ isCurrentEmail: false, email: e.target.value })

        this.props.changeEmailInput ? this.props.changeEmailInput(e.target.value) : null
    }

    renderInput = () => {
        const classCheckEmail = 
            this.state.isCurrentEmail !== null ? 
                this.state.isCurrentEmail ? 
                    `${ROOT_CLASS}__email-success` : 
                    `${ROOT_CLASS}__email-error` : 
                ''

        const inputField = 
            <input
                className={`${ROOT_CLASS}__email ${classCheckEmail}`}
                type={this.props.type}
                onChange={this.changeEmailInput}
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

export default InputEmail