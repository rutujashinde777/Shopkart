
import React, { Component } from 'react'

export default class ErrorBoudary extends Component {

    constructor(props){
        super(props)
        this.state={
            hasError: false
        }
    }

static getDerivedStateFromError(error){
    return{hasError:true}
}

componentDidCatch(error,errorInfo){
    console.log(error+"-"+errorInfo);
}

  render() {
    if(this.state.hasError){
        return <h3>Something went wrong...!!</h3>
    }

    return this.props.children;
  }
}
