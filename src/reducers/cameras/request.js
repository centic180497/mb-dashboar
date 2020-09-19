import { combineReducers } from 'redux'
import { CameraTypes } from 'action_types'
import { initialRequestState, handleRequest } from '../helpers'

function getCameras(state = initialRequestState(), action) {
  return handleRequest(
    CameraTypes.GET_CAMERAS_REQUEST,
    CameraTypes.GET_CAMERAS_SUCCESS,
    CameraTypes.GET_CAMERAS_FAILURE,
    state,
    action,
  )
}

export default combineReducers({ getCameras })
