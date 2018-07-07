import constants from '../constants/constants';
import $ from "jquery";


function getComments(comments, hasMoreComments) {
    return {
        type: constants.COMMENTS_LOADED,
        comments: comments,
        hasMoreComments: hasMoreComments
    }
} 

export const initialLoad = () => {
    return function (dispatch) {
        var request = new XMLHttpRequest();
        request.open("GET", "https://arh.chibbistest.ru/api/reviews", true);
        request.send();
        request.onreadystatechange = function () {
            if (this.readyState == XMLHttpRequest.DONE) {
                var hasNextPage = JSON.parse(request.getResponseHeader("Paging-Headers")).HasNextPage;
                var comments = JSON.parse(request.responseText);
                dispatch(getComments(comments, hasNextPage));

            }
        }
    }   
}
    

    