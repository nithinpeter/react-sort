export const sortDataSource = (sortOptions, dataSource) => {
    const {sortDir, sortField, isCaseSensitive = false} = sortOptions;
    
    if(!sortDir) {
        throw new Error("Please specify sort direction");
    }

    if(!sortField) {
        throw new Error("Please specify sort field");
    }

    if(!dataSource) {
        throw new Error("Please specify data source");
    }

    const compareFn = (a,b) => {
        let aField = a[sortField];
        let bField = b[sortField];

        if(!isCaseSensitive) {
            if(typeof aField === "string")
                aField = aField.toLowerCase();
            
            if(typeof bField === "string")
                bField = bField.toLowerCase();
        }

        if(sortDir === "asc") {
            if(aField > bField)
                return 1;
                
            if(aField < bField)
                return -1;
            
            return 0;
        }

        if(sortDir === "des") {
            if(aField > bField)
                return -1;
                
            if(aField < bField)
                return 1;
            
            return 0;
        }
    }

    return dataSource.sort(compareFn);
}