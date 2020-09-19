import { ActionTypes } from 'utils/constants'

export function openModal(modalData) {
  return (dispatch) => {
    const action = {
      type: ActionTypes.MODAL_OPEN,
      modalId: modalData.modalId,
    }

    dispatch(action)
    return { data: true }
  }
}

export function closeModal(modalId) {
  return (dispatch) => {
    const action = {
      type: ActionTypes.MODEL_CLOSE,
      modalId,
    }

    dispatch(action)
    return { data: true }
  }
}
