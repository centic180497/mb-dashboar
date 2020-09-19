export function getIsLogining(state) {
  return state.user.api.login.pending
}

export function getUserLogin(state) {
  return state.user.account
}

export function getIsLoadMe(state) {
  return state.user.api.loadMe.pending
}
