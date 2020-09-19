export function initialRequestState() {
  return {
    pending: false,
    error: {},
  }
}

export function handleRequest(REQUEST, SUCCESS, FAILURE, state, action) {
  switch (action.type) {
    case REQUEST:
      return { ...state, pending: true }
    case SUCCESS:
      return { ...state, pending: false, error: {} }
    case FAILURE:
      return { ...state, pending: false, error: action.error }
    default:
      return state
  }
}
