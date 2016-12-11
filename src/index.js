import React, { PropTypes } from 'react';
import * as ReactSortUtils from './react-sort-utils';


const ReactSort = ({ dataSource, children, sortOptions, renderHeader }) => {
    const sortedDataSource = ReactSortUtils.sortDataSource(sortOptions, dataSource);
    return (<div>
        { (renderHeader && typeof renderHeader == 'function') ? renderHeader(ReactSortUtils, sortOptions, sortedDataSource) : null }
        { sortedDataSource.map(item => children(item)) }
    </div>)
}

ReactSort.propTypes = {
    dataSource: PropTypes.array.isRequired,
    sortOptions: PropTypes.shape({
        sortField: PropTypes.string.isRequired,
        sortDir: PropTypes.oneOf(['asc', 'des']).isRequired,
        isCaseSensitive: PropTypes.boolean
    }).isRequired,
    renderHeader: PropTypes.func,
    renderFooter: PropTypes.func,
}

export default ReactSort;

