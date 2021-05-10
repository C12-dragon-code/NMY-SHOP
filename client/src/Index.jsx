import React, { Component } from 'react'
import ReactDOM from 'react-dom'

export default class Index extends Component {
    render() {
        return (
            <div>
                <h1>
                    hello kais
                </h1>
            </div>
        )
    }
}

ReactDOM.render(<Index />, document.getElementById('app'));