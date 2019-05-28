import React, { Component } from 'react';
import './App.css';
const axios = require('axios');

class Weather {
  constructor(time, temp, rain, main, desc) {
    this.time = time;
    this.temp = temp;
    this.rain = rain;
    this.main = main
    this.desc = desc;
  }
}

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
                  , wakeUpTime: 'Set alarm', quote: ''
                  , daydate: ''
                  , weather: [new Weather(),new Weather(),new Weather(),new Weather(),new Weather()]
                  , weatherOne: ''
                  , weatherTwo: ''
                  , weatherThree: ''
                  , weatherFour: ''
                  , weatherFive: ''};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
    this.setAlarm = this.setAlarm.bind(this);
    this.updateQuote = this.updateQuote.bind(this);
    this.getWeather = this.getWeather.bind(this);
    this.init = this.init.bind(this);
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 60000); // once a minute
    this.init();
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  async init() {
    this.tick();
    this.updateQuote();

    /*let weatherArray = await this.getWeather();
    console.log("this.weather: " + this.weather);*/
  }

  async getWeather() {
    let apiKey = '3e924a3845067246d9b98a6075c44a26';
    let city = 'dublin';
    let url = "http://api.openweathermap.org/data/2.5/forecast?q=dublin&appid=3e924a3845067246d9b98a6075c44a26&units=metric";

    let body = await axios.get(url);
    console.log(body.data);

    // 9am, 12pm, 3pm, 6pm, 9pm
    let weatherArray = [new Weather(), new Weather(), new Weather(), new Weather(), new Weather()];

    let date = new Date();
    let hours = date.getHours();
    console.log(date.getHours());

    let hoursDiff = Math.abs(hours - 9);
    console.log(hoursDiff);

    let offset = Math.floor(hoursDiff / 3) - 1; // as we have 3 hour increments
    console.log(offset);

    var i;
    for (i = 0; i < weatherArray.length; i++) { 
      weatherArray[i].time = body.data.list[i+offset].dt_txt;
      weatherArray[i].main = body.data.list[i+offset].weather[0].main;
      weatherArray[i].desc = body.data.list[i+offset].weather[0].description;
      weatherArray[i].temp = body.data.list[i+offset].main.temp;
      let rain = Math.round(body.data.list[i+offset].rain['3h'], 3);
      if (rain) {
        weatherArray[i].rain = rain;
      } else {
        weatherArray[i].rain = 0;
      }
      console.log(weatherArray[i]);
    }

    this.setState({
      weatherOne: "Time: " + weatherArray[0].dt_txt + " " + weatherArray[0].main + " " + weatherArray[0].desc + " " + weatherArray[0].temp + " degrees. % rain: " +  weatherArray[0].rain,
      weatherTwo: weatherArray[1].dt_txt + weatherArray[1].main + weatherArray[1].desc + weatherArray[1].temp + weatherArray[1].rain,
      weatherThree: weatherArray[2].dt_txt + weatherArray[2].main + weatherArray[2].desc + weatherArray[2].temp + weatherArray[2].rain,
      weatherFour: weatherArray[3].dt_txt + weatherArray[3].main + weatherArray[3].desc + weatherArray[3].temp + weatherArray[3].rain,
      weatherFive: weatherArray[4].dt_txt + weatherArray[4].main + weatherArray[4].desc + weatherArray[4].temp + weatherArray[4].rain,

    })

    this.setState({
      weather: weatherArray
    })

    return weatherArray;
  }

  tick() {
    var date = new Date();

    if(date.getMinutes() === 0){ // Check the time
        this.updateQuote();
        //this.getWeather();
    }

    date = date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    this.setState({
      time: date
    })

    var date = new Date();

    var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    var myDay = days[date.getDay()-1];
    var myDate = date.getDate();
    var myMonth = months[date.getMonth()];

    this.setState({
      daydate: myDay + ' ' + myDate + ' ' + myMonth
    })
  }

  handleClick() {
    this.setAlarm();
    //this.setState(state => ({alarm: "test"}));
  }

  updateQuote() {

    var quotes = ["\"He who has a ‘why’ can live to bear almost any ‘how’.\" -Nietzsche"
                  , "\"We must all suffer one of two things, discipline or regret.\""
                  , "\"Action expresses priorities\" - Gandhi"
                  , "\“The line dividing good and evil cuts through the heart of every human being.\” - Aleksandr Solzhenitsyn"
                ]
    
    var item = quotes[Math.floor(Math.random()*quotes.length)];

    this.setState({
      quote: item
    })
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
        <h1>{this.state.daydate}</h1>
        {/*<h3>9am {this.state.weatherOne}, 12pm {this.state.weatherTwo}, 3pm {this.state.weatherThree}, 6pm {this.state.weatherFour}, 9pm {this.state.weatherFive}</h3>*/}
        <p>{this.state.time}</p>
        <h3>{this.state.quote}</h3>
      </div>
    )  
  }
}

/*
{this.weather.map((weather, index) => (
            <p>{weather.time} {weather.main}</p>
        ))}
        */

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
