import { WebSocketClient } from 'client'
import { WebsocketEvents } from 'utils/constants'
import { getSiteURL } from 'utils/url'

import store from '../store'

import { pushNotification } from 'actions/action_notification'

const dispatch = store.dispatch
const getState = store.getState

// const WS_URL = 'ws://10.49.46.11:8001'
// const WS_URL = 'ws://103.101.76.161:8001'
const WS_URL = 'ws://116.110.17.100:1085'

export function initialize() {
  if (!window.WebSocket) {
    console.log('Browser does not support websocket')
    return
  }

  let connUrl = new URL(getSiteURL())
  if(connUrl.protocol ==='https:'){
    connUrl.protocol = 'wss:'
  } else {
    connUrl.protocol = 'ws:'
  }
  
  connUrl = connUrl.toString()
  
  WebSocketClient.setEventCallback(handleEvent)
  WebSocketClient.initialize(connUrl)
}

export function close() {
  WebSocketClient.close()
}

function reconnectWebSocket() {
  close()
  initialize()
}

export function handleEvent(msg) {
  switch (msg.type) {
    case WebsocketEvents.BLACKLIST:
      handleBlacklistEvent(msg)
      break
  }
}

export function handleBlacklistEvent(msg) {
  dispatch(pushNotification(msg.data))
}
