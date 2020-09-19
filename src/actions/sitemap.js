import {Client4} from 'client'
import * as actions from 'actions/action_camera'
import {reloadPolitical} from 'actions/action_political'

export function seachCamera(political){
    return async (dispatch) => {
      dispatch(actions.searchCam())
      let data
      try {
        data = await Client4.sitemaps(political)
      } catch (error) {
          console.log('err', error);
          
        dispatch(actions.searchCamFailure(error))

        return error
      }
      return dispatch(actions.searchCamSuccess(data))
      
    }
  }


export function provinces(){
  return async (dispatch) => {
  //   dispatch(actions.provinces())
    let data
    try {
      data = await Client4.provinces()
    } catch (error) {
        console.log('err', error);
    }
    return dispatch(reloadPolitical(data))
    
  }
}