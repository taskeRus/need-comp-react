import React, { Component } from 'react'
import './Select.css'

const ROOT_CLASS = 'need-comp-select'

class Select extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: false,
            chooseItem: {
                id: null,
                name: ''
            }
        }
    }

    showMenu = (e) => {
        e.preventDefault()
        this.setState({ isOpen: true })
        document.addEventListener('click', this.closeMenu)
    }

    closeMenu = (e) => {
        if (!this.dropdownMenu.contains(e.target)) {
            this.setState({ isOpen: false })
            document.removeEventListener('click', this.closeMenu)
        }
    }

    chooseItem = (el, i) => {
        if (el !== this.state.chooseItem.name) {
            if (this.props.choosenItem) this.props.choosenItem(el)
            this.setState({ 
                isOpen: false,
                chooseItem: {
                    id: i,
                    name: el
                }
            })
            document.removeEventListener('click', this.closeMenu)
        }
    }

    render() {
        return (
            <div className={ROOT_CLASS}>
                <div className={`${ROOT_CLASS}__header`} onClick={this.showMenu}>
                    <div className={`${ROOT_CLASS}__header-name`}>{this.state.chooseItem.name ? this.state.chooseItem.name : this.props.name}</div>
                </div>
                { this.state.isOpen ?
                    <div 
                        className={`${ROOT_CLASS}__select-list`} 
                        ref={el => this.dropdownMenu = el}
                    >
                        { this.props.list.map((el, i) => (
                            <div 
                                className={`${ROOT_CLASS}__select-list-item ${this.state.chooseItem.id === i ? `${ROOT_CLASS}__select-list-current` : ''}`} 
                                key={i} 
                                onClick={() => this.chooseItem(el, i)}
                            >
                                <span className={`${ROOT_CLASS}__select-list-name`}>{el}</span>
                            </div>
                        )) }
                    </div> :
                    null
                }
            </div>
        )
    }
}

export default Select