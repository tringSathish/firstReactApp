import React from 'react'
import ReactDOM from 'react-dom'
import './pic_bulbon.gif'
import './pic_bulboff.gif'
import './bulb.css'

export default class Toggle extends React.Component {
  constructor (props) {
    super(props)
    this.state = { isToggleOn: true,
      style: true,
      image: true
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn,
      style: !prevState.style,
      image: !prevState.image
    }))
  }

  render () {
    return (
      <div style={this.state.style ? { background: 'Lightyellow' } : { background: 'Black' }} class='main'>
        <img src={this.state.image ? require('./pic_bulbon.gif') : require('./pic_bulboff.gif')} />
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? 'OFF' : 'ON'}
        </button>
      </div>
    )
  }
}

ReactDOM.render(
  <Toggle />,
  document.getElementById('root')
)
