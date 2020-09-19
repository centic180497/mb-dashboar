import { connect } from 'react-redux'
import SitemapPage from './sitemap_page'
import {seachCamera, provinces} from 'actions/sitemap'
import {showInfoWindow} from 'actions/action_map'
// import {provinces} from 'actions/provinces'
import {districts} from 'actions/district'

function mapStateToProps(state){
  return {          
   cams:state.cameras.cameras,
   political: state.political,
   
  }
}

function mapDispatchToProps(dispatch){
    return {          
      isSeachcam:(political) => dispatch(seachCamera(political)),
      Province:()=> dispatch(provinces()),
      Districs:()=> dispatch(districts()),
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(SitemapPage)
