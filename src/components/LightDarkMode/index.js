import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {mode: false}
  // true - darkMode

  changeMode = () => {
    const {mode} = this.state
    this.setState(prevState => ({mode: !prevState.mode}))
  }

  getMode = () => {
    const {mode} = this.state
    let text
    if (mode) {
      text = 'Dark Mode'
    } else {
      text = 'Light Mode'
    }
    return text
  }

  render() {
    const {mode} = this.state
    const getText = this.getMode()
    let bgClass
    let fontClass
    if (mode) {
      bgClass = 'light-mode'
      fontClass = 'light-mode-heading'
    } else {
      bgClass = 'dark-mode'
      fontClass = 'dark-mode-heading'
    }
    return (
      <div className="app-container">
        <div className={`${bgClass} bg-container`}>
          <h1 className={`${fontClass}`}>Click to Change Mode</h1>
          <button className="button" type="button" onClick={this.changeMode}>
            {getText}
          </button>
        </div>
      </div>
    )
  }
}
export default LightDarkMode
