// src/js/components/App.js
import React from "react";
import Filter from "./Filter";
import CommentList from "./CommentList"
import { Link, Route } from 'react-router-dom';

const App = () => (
    <div className="container">     
        <Filter />
        <Route path='/' component={CommentList} />           
    </div>
);
export default App;


