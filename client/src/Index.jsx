import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Pro from './components/Pro.jsx'
export default class Index extends Component {
    constructor(props) {
        super(props)
         this.state={
             component:'',
         }
    }
    // detail(){
    //     this.setState({
    //         component:
    //     })
    
    render() {
        return (
            <div>
              <Pro/>
            </div>
        )
    }
}

ReactDOM.render(<Index />, document.getElementById('app'));