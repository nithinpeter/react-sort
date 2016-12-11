import React from 'react';
import ReactSort from '../src';


const WithHeader = () => (<ReactSort 
                        dataSource={ [ { name: "messi", age: 2000}, { name: "nithin", age: 12 }, { name: "peter", age: 43 } ] }
                        sortOptions={{ sortField: "age", sortDir: "des" }}
                        renderHeader={renderHeader}
                        > 
                            {
                                (props) => <div>{props.name}</div>
                            }
                        </ReactSort>);


const renderHeader = (ReactSortUtils, currentSortOptions, dataSource) => <div>
    header
    <button onClick={ () => ReactSortUtils.sortDataSource(_sortAscending(currentSortOptions), dataSource)}>
        ASC
    </button>
    <button onClick={ () => ReactSortUtils.sortDataSource(_sortDescending(currentSortOptions), dataSource) }>
        DES
    </button>
</div>


const _sortAscending = (currentSortOptions) => {
    currentSortOptions.sortDir = "asc";
    currentSortOptions;
}
const _sortDescending = (currentSortOptions) => {
    currentSortOptions.sortDir = "des";
    currentSortOptions;
}


export default WithHeader;
