import React, { Component } from 'react'
import './Card.css'

export default class Card extends Component {

    state = {
        data: []
    }

    componentDidMount() {
        const { today, tomorrow } = this.props

        if (today) {
            const data = this.props.po[1].today.sort((a,b) => new Date (b.at) - new Date (a.at))
            this.setState({data})
        } else if (tomorrow) {
            const data = this.props.po[1].tomorrow.sort((a,b) => new Date (b.at) - new Date (a.at))
            this.setState({data})
        }
        
    }

    render() {
        // tomorrow? new Date(data[0].date) : new Date(data[0].at)
        const { po, tomorrow } = this.props
        const { data } = this.state
        const date = data[0]&& new Date(data[0].at)
        const dayAndMonth = date&& date.toString().slice(4, 10)
        const time = date&& date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
        const value = data[0]&& data[0].value
        const prevValue = data[1]&& data[1].value
        const valueDifference = value - prevValue
        const percentageChange = value&& prevValue&& value === prevValue? 0 : (value - prevValue) / prevValue
        const incOrDecCheck = valueDifference === 0? "white" : value > prevValue? "#4EAD51" : "#DD481D"
        const inc = value > prevValue? true : false
        const checkPercentageChange = percentageChange&& percentageChange.toFixed(1) === "0.0"|| percentageChange.toFixed(1) === "-0.0" || percentageChange === 0? "0.0" : percentageChange
        const formatedPercentageChange = checkPercentageChange === "0.0"? checkPercentageChange : checkPercentageChange.toFixed(1)
        const formatedValueDifference = valueDifference&& valueDifference === 0? "0.00" : valueDifference.toFixed(2)
        return (
            <div className='card' style={tomorrow? {backgroundColor: "#222222"} : {backgroundColor: "#283838"}}>
                <h2 className='card-title'>{po[0]}</h2>
                <h3 className='date'>{dayAndMonth + " " + time}</h3>
                <h2 className='value'>{value&& value.toFixed(2)}</h2>
            <p className='value-diff' style={{color: incOrDecCheck}}>{inc&&"+"}{formatedValueDifference&& formatedValueDifference}</p>
            <p className='value-diff' style={{color: incOrDecCheck}}>{inc&&"+"}{formatedPercentageChange&& formatedPercentageChange} %</p>
            </div>
        )
    }
}
