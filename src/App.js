import React from 'react';
import './App.css';
import Card from './Components/Card';

class App extends React.Component {
  state = {
    data: []
  }

  componentDidMount(){
    fetch("http://localhost:3000/data").then(resp => resp.json()).then(data => this.setState({data}))
  }

  render() {
    const { data } = this.state
    const todayForcastsWithData = data.filter(po => po[1].today[0] !== undefined )
    const tomorrowForcastsWithData = data.filter(po => po[1].tomorrow[0] !== undefined )
    return (

      <>
      <h1 className='title'>NTS Linepack</h1>
      <div className='today-cards-container'>
        {todayForcastsWithData.map(po => (
          <Card po={po} today={true}/>
        ))}
      </div>
      <div className='tomorrow-cards-container'>
        {tomorrowForcastsWithData.map(po => (
          <Card po={po} tomorrow={true}/>
        ))}
      </div>
      </>
    );
  }
}

export default App;
