import React, { Component } from "react";



const Comment = (props) => {
    var some = props.message;
    var isPositive = props.isPositive ? "comment positive" : "comment negative";

    return (<div className={isPositive}>
        <div className="name">
            <div className="icon"></div>
            <div className="actual-name">{props.userName}</div>            
        </div>  
        <div className="message">{props.message}</div>
        <div className="date">{props.dateAdded}</div>
    </div>)
}

export default Comment;