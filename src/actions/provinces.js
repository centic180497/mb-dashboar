import {Client4} from 'client'
import * as actions from 'actions/action_political'


// export function provinces(){
//     return async (dispatch) => {
//     //   dispatch(actions.provinces())
//       let data
//       try {
//         data = await Client4.provinces()
//       } catch (error) {
//           console.log('err', error);
//       }
//       return dispatch(actions.reloadPolitical(data))
      
//     }
//   }

  export function district(id) {
      return async (dispatch) => {
        let data
        try {
          data = await Client4.districts(id)
        } catch (error) {
            console.log('err', error);
        }
        return dispatch(actions.reloadPolitical(data))
      }
  }

export function communes(id){
    return async (dispatch) => {
    //   dispatch(actions.provinces())
      let data
      try {
        data = await Client4.communes(id)
      } catch (error) {
          console.log('err', error);
      }
      return dispatch(actions.reloadPolitical(data))
      
    }
  }