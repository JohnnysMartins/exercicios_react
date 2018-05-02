import React from 'react'

export default class ClassComponenet extends React.Component {
    render() {
        let valor = this.props.value
        valor++
        return (
            <h1>{valor}</h1>
        )
    }
}
