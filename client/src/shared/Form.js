import  { Component } from 'react'

class Form extends Component {
    constructor(props){
        super(props);
        this.state = {
            inputs: props.inputs
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e){
        const { name, value } = e.target;
        this.setState(prevState => ({
            inputs: {
                ...prevState.inputs,
                [name]: value
            }
        }))
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.submit( this.state.inputs )
        this.props.reset && this.setState({ inputs: this.props.inputs })
    }

    render(){
        return this.props.render({
            handleSubmit: this.handleSubmit,
            handleChange: this.handleChange,
            inputs: this.state.inputs
        })
    }
}

export default Form;
