import {Client4} from 'client'
import * as actions from 'actions/action_political'

export function districts(){
    return async (dispatch) => {
    //   dispatch(actions.provinces())
      let data
      try {
        data = await Client4.districts()
      } catch (error) {
          console.log('err', error);
      }
      return dispatch(actions.reloadPolitical())
      
    }
  }