import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getIsLogining, getUserLogin } from 'selectors/users'
import { login } from 'actions/users'

import LoginPage from './login_page'

function mapStateToProps(state) {
  return {
    isLogining: getIsLogining(state),
    accountUser: getUserLogin(state)
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ login }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)
