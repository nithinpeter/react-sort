import React from 'react';
import ReactSort from '../src';


const Simple = () => (<ReactSort 
                        dataSource={ [ { name: "messi", age: 2000}, { name: "nithin", age: 12 }, { name: "peter", age: 43 } ] }
                        sortOptions={{ sortField: "age", sortDir: "des" }}
                        > 
                            {
                                (props) => <div>{props.name}</div>
                            }
                        </ReactSort>);

export default Simple;