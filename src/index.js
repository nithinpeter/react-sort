import React, { PropTypes } from 'react';


const ReactSort = ({ dataSource, sortField, sortDir, children }) => {
    return (<div>
        { dataSource.map(item => children(item)) }
    </div>)
}

ReactSort.propTypes = {
    dataSource: PropTypes.array.isRequired,
    sortField: PropTypes.string.isRequired,
    sortDir: PropTypes.oneOf(['asc', 'des']).isRequired,
}

export default ReactSort;

