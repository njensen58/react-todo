import { Component } from 'react'

export default class Toggle extends Component {
    constructor(props){
        super(props)
        this.state = { isToggled: props.toggled || false }
        this.toggle = this.toggle.bind(this)
    }

    toggle() { 
        this.setState(prevState => ({ isToggled: !prevState.isToggled }))
    }

    render(){
        const { isToggled } = this.state
        return this.props.render({ toggle: this.toggle, isToggled })
    }

}
