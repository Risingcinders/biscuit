import React, { Component } from 'react'

class PersonCard extends Component{
    constructor(props){
        super(props)
        this.state = {
            age : this.props.age
        }
    }

    render() {
        const {age, hairColor} = this.props;
        return(
            <div className="peoples">
                <h2>{this.props.lastName}, {this.props.firstName}</h2>
                <p>Age: {this.state.age}</p>
                <p>Hair Color: {hairColor}</p>
                <button onClick= { () => this.setState( {age : (this.state.age+1)}) }>Add one to age!</button>
            </div>
        )
    }
}

export default PersonCard