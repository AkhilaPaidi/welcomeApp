import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {
    isSubscribed: false,
  }

  onClickSubscribe = () => {
    this.setState(prevState => ({isSubscribed: !prevState.isSubscribed}))
  }

  getButtonText = () => {
    const {isSubscribed} = this.state

    return isSubscribed ? 'Subscribed' : 'subscribe'
  }

  render() {
    const buttonText = this.getButtonText()

    return (
      <div className="welcome-container">
        <h1 className="heading">Welcome</h1>
        <p className="caption">Thank you! Happy learning</p>
        <button
          type="button"
          className="button"
          onClick={this.onClickSubscribe}
        >
          {buttonText}
        </button>
      </div>
    )
  }
}

export default Welcome
