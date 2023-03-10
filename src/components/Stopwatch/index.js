// Write your code here

import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {count: 0}

  onStart = () => {
    console.log('prem on start')
    this.timerId = setInterval(this.tick, 1000)
  }

  tick = () => {
    const {count} = this.state
    this.setState({count: count + 1})
  }

  onStop = () => {
    clearInterval(this.timerId)
  }

  onReset = () => {
    clearInterval(this.timerId)
    this.setState({count: 0})
  }

  getSec = () => {
    const {count} = this.state
    const sec = Math.floor(count % 60)
    if (sec > 9) {
      return sec
    }
    return `0${sec}`
  }

  getMin = () => {
    const {count} = this.state
    const min = Math.floor(count / 60)
    if (min > 9) {
      return min
    }
    return `0${min}`
  }

  render() {
    const time = `${this.getMin()}:${this.getSec()}`

    return (
      <div>
        <h1>Stopwatch</h1>
        <div>
          <h1>{time}</h1>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
            />
            <button onClick={this.onStart} type="button">
              start
            </button>
            <button onClick={this.onStop} type="button">
              stop
            </button>
            <button onClick={this.onReset} type="button">
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default Stopwatch
