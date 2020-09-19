import _ from 'lodash'
import { Client4 } from 'client'
import { UserTypes } from 'action_types'
import LocalStorageStore from 'stores/local_storage_store'

export function login(username, password) {
  return async (dispatch) => {
    dispatch({ type: UserTypes.LOGIN_REQUEST, data: null })

    let data
    try {
      data = await Client4.login(username, password)
    } catch (error) {
      dispatch({ type: UserTypes.LOGIN_FAILURE, error })

      return { error }
    }

    return completeLogin(dispatch, data)
  }
}

function completeLogin(dispatch, data) {
  Client4.setUserId = data.id
  Client4.setToken = data.token
  LocalStorageStore.setItem('USER', JSON.stringify(data))
  dispatch({ type: UserTypes.LOGIN_SUCCESS, data })
}

export function logout() {
  return async (dispatch) => {
    dispatch({ type: UserTypes.LOGOUT_REQUEST, data: null })
    try {
      await Client4.logout()
    } catch (error) {
      // nothing to do here
    }

    dispatch({ type: UserTypes.LOGOUT_SUCCESS, data: null })
  }
}

export function loadMe() {
  return async (dispatch) => {
    const user = LocalStorageStore.getItem('USER')
    if (_.isEmpty(user)) return

    const token = JSON.parse(user).access_token

    dispatch({ type: UserTypes.LOAD_ME_REQUEST, data: { token } })
    let data
    try {
      data = await Client4.loadMe(token)
    } catch (error) {
      dispatch({ type: UserTypes.LOAD_ME_FAILURE })
      return
    }

    dispatch({ type: UserTypes.LOAD_ME_SUCCESS, data: data.data })
  }
}
