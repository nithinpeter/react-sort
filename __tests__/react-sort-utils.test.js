import * as ReactSortUtils from "../src/react-sort-utils";

describe('Test sorting', () => {
    it('sorts ascending', () => {
        
        const sortOptions = { sortField: "age", sortDir: "des" };
        const dataSource =  [{ name: "nithin", age: 12 }, { name: "peter", age: 43 } ];

        const result = ReactSortUtils.sortDataSource(
            sortOptions,
            dataSource
        );
        expect(JSON.stringify(result[1])).toBe(
            JSON.stringify({ name: "peter", age: 43 })
        );
    });
}); 