import constants from '../constants/constants'

const initialState = {
    hasMoreComments: false,
    commentList: [],
    currentPage: 1,
    currentFilter: constants.APPLY_EVERY_FILTER
}


const commentListReducer = (state = initialState, action) => {
    switch (action.type) {
        case constants.COMMENTS_LOADED: {
            return Object.assign({}, state, { commentList: action.comments, hasMoreComments: action.hasMoreComments })
        }   
        case constants.LOAD_MORE_COMMENTS: {
            return Object.assign({}, state, { commentList: state.commentList.concat(action.comments), hasMoreComments: action.hasMoreComments, currentPage: action.currentPage })
        }   
        case constants.APPLY_FILTER: {
            return Object.assign({}, state, {
                currentFilter: action.filter
            })
        }  
        default: return state;
    }
}

export default commentListReducer;