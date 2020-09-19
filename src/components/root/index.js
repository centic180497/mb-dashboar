import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { loadMe } from 'actions/users'
import { getIsLoadMe } from 'selectors/users'

import Root from './root'

function mapStateToProps(state) {
  return {
    isLoadMe: getIsLoadMe(state),
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ loadMe }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Root)
