import { combineReducers } from 'redux';
import { combineForms } from 'react-redux-form';
import {
  TOPIC,
  TOPICS
} from '../Action'

const postsByReddit = (state={}, action) => {
  switch (action.type) {
    case TOPICS:
      return {
        ['results']: {
          type: action.type, 
          topics: action.results
        }
      }  
    case TOPIC:
      return { 
        ['results']: {
          type: action.type,
          topic: action.results.topic,
          replies: action.results.replies
        } 
      } 
    default:
      return state
  }
}

const initialForm = {
  userManage : {  
      loginName: '',
      userName: '',
      email: ''
  },
  addUser : {
      userName: '',
      password: '',
      email: '',
      phone : ""
  },
  login : {
      username : "",
      password : ""
  },
  homeManagement : {
    page1 : {
      city : "",//城市
      channel : "",//渠道
      state : "",//状态
      id : "",
      pageName : ""
    }
  }
}
  


const rootReducer = combineReducers({
  postsByReddit,
  deep : combineForms({...initialForm},'deep')
}) 

export default rootReducer
