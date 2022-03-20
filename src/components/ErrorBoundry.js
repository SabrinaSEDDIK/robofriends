import { Component } from "react"

class ErrorBoundry extends Component {

    constructor(){
      super()
      this.state={
        hasError: false,
      }

    }

    componentDidCatch(){
        this.setState({hasError: true})
    }

    render(){
        return this.state.hasError ? <h1>Une erreur est survenue ... </h1> : this.props.children
    }
    
}

export default ErrorBoundry;