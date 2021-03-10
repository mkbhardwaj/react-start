import { CREATE_COURSE } from "../actions/actionsConstants";

export default function courseReducer(state =[], action)
{
    switch(action.type){
        case CREATE_COURSE:
            return [...state, { ...action.course }];
        default: 
             return state;
    }
}