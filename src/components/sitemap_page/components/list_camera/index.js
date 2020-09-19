import { connect } from 'react-redux'
import ListItem from './listitem'
function mapStateToProps(state){
  return {          
   cams:state.cameras.cameras.data
  }
}

export default connect(mapStateToProps,null)(ListItem)
