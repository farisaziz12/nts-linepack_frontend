import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './Components/Card';

class App extends React.Component {
  state = {
    data: []
  }

  componentDidMount(){
    fetch("http://localhost:3000/data").then(resp => resp.json()).then(data => this.setState({data: Object.entries(data)}))
  }

  render() {
    const { data } = this.state
    return (

      <>
      <h1 className='title'>NTS Linepack</h1>
      {data.map(po => (
        <Card po={po}/>
      ))}
      </>
    );
  }
}

export default App;
