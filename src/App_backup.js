import React, { Component } from 'react';
import './App.css';

class AlarmButton extends Component {
  constructor(props) {
    super(props);
    this.state = {wakeUpTime: 'Set alarm'};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
    this.alarm = new Alarm();
  }

  handleClick() {
    this.setState(state => ({alarm: "test"}));
    //var test = new Alarm();
    //test.setAlarm();
    //this.state.alarm.setAlarm();
    /*var oldDateObj = new Date();
    var diff = 600; // 10 hours
    var newDateObj = new Date(oldDateObj.getTime() + diff*60000);
    this.setState(state => ({wakeUpTime: 'Alarm set for: ' + newDateObj.toLocaleTimeString()}))
    *///this.setState(state => ({wakeUpTime: Date().toLocaleTimeString()}))
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.wakeUpTime}
      </button>
    )
  }
}

class Alarm extends Component {
  constructor(props) {
    super(props);
    this.state = {alarm: ''};

    // This binding is necessary to make `this` work in the callback
    this.setAlarm = this.setAlarm.bind(this);
  }

  componentDidMount() {
    //this.alarm = 'Alarm not set';
    this.setState(state => ({alarm: 'Alarm not set'}));
  }

  componentWillUnmount() {

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
      </div>
    )
  }
}

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {time: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      time: new Date()
    })
  }

  render() {
    return (
      <div>
        <p>{this.state.time.toLocaleTimeString()}</p>
      </div>
      )
  }
}


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Alarm />
          <Clock />
          <AlarmButton />
        </header>
      </div>
    );
  }
}

export default App;
