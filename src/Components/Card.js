import React, { Component } from 'react'
import './Card.css'

export default class Card extends Component {

    state = {
        data: []
    }

    componentDidMount() {
        const data = this.props.po[1].sort((a,b) => new Date (b.at) - new Date (a.at))
        console.log(data)
        this.setState({data})
    }

    render() {
        const { po } = this.props
        const { data } = this.state
        return (
            <div className='card'>
                <h2 className='card-title'>{po[0]}</h2>
                <h4 className='txt'>{data[0]&& data[0].value.toFixed(2)}</h4>
            </div>
        )
    }
}
