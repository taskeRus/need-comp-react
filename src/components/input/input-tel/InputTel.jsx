import React, { Component, Fragment } from 'react'

import './InputTel.css'

const ROOT_CLASS = 'need-comp-input-tel'

class InputTel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tel: '',
            isCurrentTel: null
        }
    }

    _validateTel = (tel) => {
        const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
        return re.test(tel)
    }

    changeTelInput = (e) => {
        this._validateTel(e.target.value) ?
            this.setState({ isCurrentTel: true, tel: e.target.value }) :
            this.setState({ isCurrentTel: false, tel: e.target.value })

        this.props.changeTelInput ? this.props.changeTelInput(e.target.value) : null
    }

    renderInput = () => {
        const classCheckTel = 
            this.state.isCurrentTel !== null ? 
                this.state.isCurrentTel ? 
                    `${ROOT_CLASS}__tel-success` : 
                    `${ROOT_CLASS}__tel-error` : 
                ''

        const inputField =
            <input
                className={`${ROOT_CLASS}__tel ${classCheckTel}`}
                type={this.props.type}
                onChange={this.changeTelInput}
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

export default InputTel