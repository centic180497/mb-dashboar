import { combineReducers } from 'redux'
import { UserTypes } from 'action_types'
import api from './request'

function account(state = {}, action) {
  switch (action.type) {
    // case (UserTypes.LOGIN_SUCCESS, UserTypes.LOAD_ME_SUCCESS):
      case (UserTypes.LOGIN_SUCCESS):
      return { ...state, ...action.data }
      case (UserTypes.LOAD_ME_SUCCESS):
      return { ...state, ...action.data }
    default:
      return state
  }
}

export default combineReducers({ account, api })
