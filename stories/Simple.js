import React from 'react';
import ReactSort from '../src';


const Simple = () => (<ReactSort dataSource={ ["a", "b"] }> 
    {
        (props) => <div>{props}</div>
    }
</ReactSort>);

export default Simple;