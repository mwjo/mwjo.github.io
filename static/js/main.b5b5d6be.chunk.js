(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,a){e.exports=a(48)},24:function(e,t,a){},27:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(17),o=a.n(r),s=(a(24),a(3)),c=a.n(s),u=a(6),h=a(7),l=a(9),d=a(8),m=a(10),p=a(1),w=a(4),b=(a(27),a(28)),f=function e(t,a,n,i,r){Object(w.a)(this,e),this.time=t,this.temp=a,this.rain=n,this.main=i,this.desc=r},g=function(e){function t(e){var a;return Object(w.a)(this,t),(a=Object(l.a)(this,Object(d.a)(t).call(this,e))).state={time:(new Date).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),wakeUpTime:"Set alarm",quote:"",daydate:"",weather:[new f,new f,new f,new f,new f],weatherOne:"",weatherTwo:"",weatherThree:"",weatherFour:"",weatherFive:""},a.handleClick=a.handleClick.bind(Object(p.a)(Object(p.a)(a))),a.setAlarm=a.setAlarm.bind(Object(p.a)(Object(p.a)(a))),a.updateQuote=a.updateQuote.bind(Object(p.a)(Object(p.a)(a))),a.getWeather=a.getWeather.bind(Object(p.a)(Object(p.a)(a))),a.init=a.init.bind(Object(p.a)(Object(p.a)(a))),a}return Object(m.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.timerID=setInterval(function(){return e.tick()},6e4),this.init()}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"init",value:function(){var e=Object(u.a)(c.a.mark(function e(){return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.tick(),this.updateQuote();case 2:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"getWeather",value:function(){var e=Object(u.a)(c.a.mark(function e(){var t,a,n,i,r,o,s,u;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return"3e924a3845067246d9b98a6075c44a26","dublin","http://api.openweathermap.org/data/2.5/forecast?q=dublin&appid=3e924a3845067246d9b98a6075c44a26&units=metric",e.next=5,b.get("http://api.openweathermap.org/data/2.5/forecast?q=dublin&appid=3e924a3845067246d9b98a6075c44a26&units=metric");case 5:for(t=e.sent,console.log(t.data),a=[new f,new f,new f,new f,new f],n=new Date,i=n.getHours(),console.log(n.getHours()),r=Math.abs(i-9),console.log(r),o=Math.floor(r/3)-1,console.log(o),s=0;s<a.length;s++)a[s].time=t.data.list[s+o].dt_txt,a[s].main=t.data.list[s+o].weather[0].main,a[s].desc=t.data.list[s+o].weather[0].description,a[s].temp=t.data.list[s+o].main.temp,u=Math.round(t.data.list[s+o].rain["3h"],3),a[s].rain=u||0,console.log(a[s]);return this.setState({weatherOne:"Time: "+a[0].dt_txt+" "+a[0].main+" "+a[0].desc+" "+a[0].temp+" degrees. % rain: "+a[0].rain,weatherTwo:a[1].dt_txt+a[1].main+a[1].desc+a[1].temp+a[1].rain,weatherThree:a[2].dt_txt+a[2].main+a[2].desc+a[2].temp+a[2].rain,weatherFour:a[3].dt_txt+a[3].main+a[3].desc+a[3].temp+a[3].rain,weatherFive:a[4].dt_txt+a[4].main+a[4].desc+a[4].temp+a[4].rain}),this.setState({weather:a}),e.abrupt("return",a);case 19:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"tick",value:function(){0===(e=new Date).getMinutes()&&this.updateQuote(),e=e.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}),this.setState({time:e});var e,t=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"][(e=new Date).getDay()-1],a=e.getDate(),n=["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()];this.setState({daydate:t+" "+a+" "+n})}},{key:"handleClick",value:function(){this.setAlarm()}},{key:"updateQuote",value:function(){var e=['"He who has a \u2018why\u2019 can live to bear almost any \u2018how\u2019." -Nietzsche','"We must all suffer one of two things, discipline or regret."','"Action expresses priorities" - Gandhi',"\u201cThe line dividing good and evil cuts through the heart of every human being.\u201d - Aleksandr Solzhenitsyn"],t=e[Math.floor(Math.random()*e.length)];this.setState({quote:t})}},{key:"setAlarm",value:function(){console.log("hi");var e=new Date,t=new Date(e.getTime()+36e6);this.setState(function(e){return{alarm:"Alarm set for: "+t.toLocaleTimeString()}})}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("h1",null,this.state.daydate),i.a.createElement("p",null,this.state.time),i.a.createElement("h3",null,this.state.quote))}}]),t}(n.Component),v=function(e){function t(){return Object(w.a)(this,t),Object(l.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement("header",{className:"App-header"},i.a.createElement(g,null)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[18,1,2]]]);
//# sourceMappingURL=main.b5b5d6be.chunk.js.map