import { connect } from 'react-redux'
import Seach from './seach'
function mapStateToProps(state){
  return {          
   provinceOption:state.political.province_list
  }
}

export default connect(mapStateToProps,null)(Seach)
