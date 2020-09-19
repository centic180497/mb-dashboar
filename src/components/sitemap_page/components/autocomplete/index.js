import { connect } from 'react-redux'
import AutocompleteCheckbox from './autocomplete'
import {changeSearchCamParams} from 'actions/action_camera'
import { district,communes } from 'actions/provinces'
import{clearProvince} from 'actions/action_political'
import {seachCamera} from 'actions/sitemap'
function mapStateToProps(state){
  return {          
    seachcam:state.cameras.searchCam,
    options:state.political,
    cams:state.cameras.cameras.data,
    political: state.political
  }
}

function mapDispatchToProps(dispatch){
    return {          
        changeSearchCamParams:(value) => dispatch(changeSearchCamParams(value)),
        clearProvince:()=>dispatch(clearProvince()),
        district: (id) => dispatch(district(id)),
        communes:(id)=>dispatch(communes(id)),
        isSeachcam:(political) => dispatch(seachCamera(political)),
    //   Province:()=> dispatch(provinces()),
    //   Districs:()=> dispatch(districts()),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AutocompleteCheckbox)
