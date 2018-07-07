import React from "react";
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { applyFilter } from '../Actions/applyFilter';
import constants from '../constants/constants';

const Filter = ({ applyFilter }) => {

    const handleChange = (e) => {
        applyFilter(e.target.value);       
    }

    return (<div className="filter">
        <select onChange={handleChange} className="custom-select">
            <option value={constants.APPLY_EVERY_FILTER}>Показывать все</option>
            <option value={constants.APPLY_ONLY_POSITIVE_FILTER}>Показывать только позитивные</option>
            <option value={constants.APPLY_ONLY_NEGATIVE_FILTER}>Показывать только негативные</option>            
        </select>
    </div>)
};

const mapStateToProps = ({ commentList }) => {
    return {
        filter: commentList.commentList,
        hasMoreComments: commentList.hasMoreComments,
        currentPage: commentList.currentPage
    };
};

export default connect(null, { applyFilter})(Filter);;