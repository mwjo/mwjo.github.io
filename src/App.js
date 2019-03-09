import React, { Component } from 'react';
import './App.css';


class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {time: new Date(), wakeUpTime: 'Set alarm', alarm: ''};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
    this.setAlarm = this.setAlarm.bind(this);
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
    this.setState(state => ({alarm: 'Alarm not set'}));
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      time: new Date()
    })
  }

  handleClick() {
    this.setAlarm();
    //this.setState(state => ({alarm: "test"}));
  }

  setAlarm() {
    console.log('hi');
    var oldDateObj = new Date();
    var diff = 600; // 10 hours
    var newDateObj = new Date(oldDateObj.getTime() + diff*60000);
    this.setState(state => ({alarm: 'Alarm set for: ' + newDateObj.toLocaleTimeString()}))
  }

  render() {
    return (
      <div>
        <p>{this.state.alarm}</p>
        <p>{this.state.time.toLocaleTimeString()}</p>
        <button onClick={this.handleClick}>{this.state.wakeUpTime}</button>
      {/*<div> id="test" onClick={this.handleClick}>{this.state.wakeUpTime} </div>*/}
      </div>
      )
  }
}


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Clock />
        </header>
      </div>
    );
  }
}

export default App;
