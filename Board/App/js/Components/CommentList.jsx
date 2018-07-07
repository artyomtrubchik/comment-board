import React, { Component }  from "react";
import { connect } from "react-redux";
import Comment  from "./Comment";
import { initialLoad } from "../Actions/initialLoad";
import { loadMoreComments } from "../Actions/loadMoreComments";
import InfiniteScroll from 'react-infinite-scroller';
import constants from '../constants/constants';


class CommentList extends Component {  
    componentDidMount() {
        this.props.initialLoad();
    }

    getVisibleComments(commentList) {
        var filteredCommentList = commentList;
        switch (this.props.currentFilter) {
            case constants.APPLY_ONLY_NEGATIVE_FILTER: {
                filteredCommentList = this.props.commentList.filter((comment) => {
                    return !comment.IsPositive
                });
                break;
            }
            case constants.APPLY_ONLY_POSITIVE_FILTER: {
                filteredCommentList = this.props.commentList.filter((comment) => {
                    return comment.IsPositive
                });
                break;
            }
            case constants.APPLY_EVERY_FILTER: {
                break;
            }
            default: break;
        }
        return filteredCommentList;
    }

    renderComments() {    
        var comments = [];
        var filteredCommentList = this.getVisibleComments(this.props.commentList);
        filteredCommentList.map((comment, i) => {           
            comments.push(<Comment
                key={comment.Id}
                userName={comment.UserName}
                message={comment.Message}
                isPositive={comment.IsPositive}
                dateAdded={comment.DateAdded}
            />)
        })
        return comments;
    }

    loadMoreComments() {
        this.props.loadMoreComments(this.props.currentPage);
    }

    render() {
        return (
            <InfiniteScroll
                pageStart={0}
                threshold={250}
                loadMore={this.loadMoreComments.bind(this)}
                hasMore={this.props.hasMoreComments}>
                <div className="comments">
                    {this.renderComments()}   
                </div>
            </InfiniteScroll>       
        )
    }
}

const mapStateToProps = ({ commentList }) => {
    return {
        commentList: commentList.commentList,
        hasMoreComments: commentList.hasMoreComments,
        currentPage: commentList.currentPage,
        currentFilter: commentList.currentFilter
    };
};


export default connect(mapStateToProps, { initialLoad, loadMoreComments })(CommentList);