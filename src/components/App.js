import '../assets/css/App.css';
import * as React from 'react';
import * as reactDOM from 'react-dom';
import { Component } from 'react';

const { exec } = require('child_process');

// interface IAppState {
//   duration: number;
//   interval: number;
// }


export default class App extends Component {
  state = {
    duration: 10,
    interval: 2000,
    count: 0,
    end: false
  };

  componentDidUpdate(){
    const { end } = this.state;

    if (end) {
      a.end
    }
  }

  render() {
    const { duration, interval, count, kill } = this.state;
    return (
      <div>
        <h1>RuneScript</h1>

        <div>
          <div>Current duration: {duration}s</div>
          <div>Current interval: {interval}ms</div>
        </div>

        <h2>Counter</h2>
        <div onClick={() => this.setState({ count: count + 1 })}>
          {count}
        </div>

        <form>
          <label>Duration (s):</label><input type="number" value={duration} onChange={this.durationChange}/>
          <label>Interval (ms):</label><input type="number" value={interval} onChange={this.intervalChange}/>
          <button onClick={this.alch}>Mouse Control</button>
        </form>
        <button onClick={this.killChange}>Kill</button>
      </div>
    );
  }

  durationChange = (e) => this.setState({ duration: e.target.value });

  intervalChange = (e) => this.setState({ interval: e.target.value });

  killChange(e) {
    const { end } = this.state;
    e.preventDefault(e);
    console.log(this.state);
  }


  alch = (e) => {
    const { duration, interval, end } = this.state;
    e.preventDefault(e);
    if (!end) {
      const a = exec(`node click.js ${(duration * 1000) + ' ' + interval}`, (error, stdout, stderr) => {
        if (error) {
          console.error(`exec error: ${error}`);
          return;
        }
        console.log(`stdout: ${stdout}`);
        console.log(`stderr: ${stderr}`);
      });
    } else if (end) {
      a.kill();
    }
  };


}
