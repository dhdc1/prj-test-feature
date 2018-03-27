import React from 'react'

export default class extends React.Component {

    render() {
        return (
            <div className="box">
                <h3>{this.props.title}</h3>
                <span>{this.props.children}</span>
            </div>
        )
    }

}