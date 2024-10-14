import React from 'react';
import { API_ROOT, PARSE_JSON } from '../constants';


import cable from '../services/Cable'

class Logger extends React.Component {

    state = {
      logs: []
    }

    componentDidMount = () => {
      this.loadRooms()
      // fetch Rooms
      this.logChannel()
      // init logChannel
    }

    componentWillUnmount = () => {
      // this is necessary to avoid memory leaks
      // the websocket won't unsubscribe unless the window is closed
      cable.disconnect()
      cable.subscriptions.subscriptions.forEach( subscription => {
        subscription.unsubscribe()
      })
    }

    loadRooms = () => {
      console.log("LOG", `${API_ROOT}/logger_channels`)
      fetch(`${API_ROOT}/logger_channels`)
      .then(PARSE_JSON)
      .then( data => {
        this.setState({ rooms: data })
      })
    }

    // Here's the most important part
    // This creates a subscription to the channel
    // 'logChannel' must match what you used
    // on the backend
    logChannel = () => {
      cable.subscriptions.create({
      channel: `LoggerChannel`,
      },
        {connected: () => {
          console.log('LoggerChannel connected!')
        },
        disconnected: () => {
          console.log('LoggerChannel disconnected!');
        },
        received: data => {
          // once the subscription is initiated
          // when the server is sent data it will
          // broadcast it out to the subscribers
          this.handleReceivedRoom(data)
          console.log('LoggerChannel data received')
        }
      })
    }

    handleReceivedRoom = response => {
        console.log(response)
        this.setState({ logs: [...this.state.logs, response] })
      this.loadRooms()
    }

    mapLogs = logs => {
      return logs.map(log => {
        return (
          <p>{ log }</p>
        )
      })
    }

    render = () => {
      return (
        <div>
            <h1>Logs</h1>
            { this.mapLogs(this.state.logs) }
        </div>
      )
    }
  }

  export default Logger
