import constants from '../constants/constants';
import $ from "jquery";

function getComments(comments, hasMoreComments, currentPage) {
    return {
        type: constants.LOAD_MORE_COMMENTS,
        comments: comments,
        hasMoreComments: hasMoreComments,
        currentPage: currentPage
    }
} 

export const loadMoreComments = (currentPage) => {
    return function (dispatch) {
        var request = new XMLHttpRequest();
        request.open("GET", "https://arh.chibbistest.ru/api/reviews?page=" + (currentPage + 1), true);
        request.send();
        request.onreadystatechange = function () {
            if (this.readyState == XMLHttpRequest.DONE) {
                var hasNextPage = JSON.parse(request.getResponseHeader("Paging-Headers")).HasNextPage;
                var pageNumber = JSON.parse(request.getResponseHeader("Paging-Headers")).PageNumber;
                var comments = JSON.parse(request.responseText);
                dispatch(getComments(comments, hasNextPage, pageNumber));

            }
        }
    }
}