import { combineReducers } from 'redux'
import { UserTypes } from 'action_types'
import { initialRequestState, handleRequest } from '../helpers'

function login(state = initialRequestState(), action) {
  return handleRequest(
    UserTypes.LOGIN_REQUEST,
    UserTypes.LOGIN_SUCCESS,
    UserTypes.LOGIN_FAILURE,
    state,
    action,
  )
}

function loadMe(state = initialRequestState(), action) {
  return handleRequest(
    UserTypes.LOAD_ME_REQUEST,
    UserTypes.LOAD_ME_SUCCESS,
    UserTypes.LOAD_ME_FAILURE,
    state,
    action
  )
}

function logout(state = initialRequestState(), action) {
  return handleRequest(
    UserTypes.LOGOUT_REQUEST,
    UserTypes.LOGOUT_SUCCESS,
    UserTypes.LOGOUT_FAILURE,
    state,
    action,
  )
}

export default combineReducers({ login, loadMe, logout })
