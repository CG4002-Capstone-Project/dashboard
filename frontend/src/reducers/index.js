import { combineReducers } from 'redux';

const addTraineeOneDataReducer = (pastTraineeOneData = [], action) => {
   if (action.type == "TRAINEE_ONE_DATA")  {
       return [...pastTraineeOneData, action.payload];
   }

   // handle initial startup
   return pastTraineeOneData;
}

const addTraineeTwoDataReducer = (pastTraineeTwoData = [], action) => {
    if (action.type == "TRAINEE_TWO_DATA")  {
        return [...pastTraineeTwoData, action.payload];
    }

    // handle initial startup
    return pastTraineeTwoData;
 }

 const addTraineeThreeDataReducer = (pastTraineeThreeData = [], action) => {
    if (action.type == "TRAINEE_THREE_DATA")  {
        return [...pastTraineeThreeData, action.payload];
    }
    
    // handle initial startup
    return pastTraineeThreeData;
 }

export default combineReducers({
     traineeOneData: addTraineeOneDataReducer,
     traineeTwoData: addTraineeTwoDataReducer,
     traineeThreeData: addTraineeThreeDataReducer
});