import '../assets/css/App.css';
import * as React from 'react';
import * as reactDOM from 'react-dom';
import {Spinner} from './Spinner';
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
    scriptResult: '',
    running: false
  };

  render() {
    const { duration, interval, count, running } = this.state;
    if (running) {
      return <Spinner/>
    }
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

  alch = async (e) => {
    const { duration, interval, running, scriptResult } = this.state;
    e.preventDefault(e);

    const a = await exec(`node click.js ${(duration * 1000) + ' ' + interval}`, (error, stdout, stderr) => {
      this.setState({running: true});
      if (error) {
        this.setState({ running: false});
        return `error: ${stderr}`;

      } else if (stdout) {
        this.setState({running: false});
        return `result: ${stdout}`;
      }
    });

   result && this.setState({result: a});
  };
}
