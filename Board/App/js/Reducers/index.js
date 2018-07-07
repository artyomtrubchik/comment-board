import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import CommentListReducer from "./commentListReducer";

const rootReducer = combineReducers({
    commentList: CommentListReducer,

})

export default rootReducer;