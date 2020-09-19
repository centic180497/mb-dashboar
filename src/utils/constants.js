export const StorageTypes = {
  SET_ITEM: 'SET_ITEM',
  REMOVE_ITEM: 'REMOVE_ITEM',
  CLEAR: 'CLEAR',
}

export const UploadStatuses = {
  LOADING: 'LOADING',
  COMPLETE: 'COMPLETE',
  DEFAULT: '',
}

export const ModalIdentifiers = {
  DELETE_CAMERA: 'DELETE_CAMERA',
  LOG_OUT: 'LOG_OUT',
  ADD_CAMERA_TO_FOLLOWED_LIST: 'ADD_CAMERA_TO_FOLLOWED_LIST',
}

export const WebsocketEvents = {
  BLACKLIST: 'blacklist',
}

export const ActionTypes = {
  MODAL_OPEN: 'MODAL_OPEN',
  MODEL_CLOSE: 'MODAL_CLOSE',
}

export const VehicleTypes = [
  { value: 0, name: 'Tất cả' },
  { value: 1, name: 'Ô tô' },
  {},
]

export const ViolationStatues = [
  { value: '0', name: 'Đã duyệt' },
  { value: 1, name: 'Chưa duyệt' },
]
