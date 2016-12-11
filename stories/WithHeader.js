import React, { Component } from 'react';
import ReactSort from '../src';

export default class WithHeader extends Component {

    constructor(props) {
        super(props);

        this.state = {
            dataSource: [{ name: "messi", age: 27 }, { name: "nithin", age: 12 }, { name: "peter", age: 43 }],
            sortOptions: { sortField: "age", sortDir: "des" }
        };
    }

    render() {

        return (<ReactSort
            dataSource={this.state.dataSource}
            sortOptions={this.state.sortOptions}
            renderHeader={this.renderHeader.bind(this)}
            >
            {
                (props) => <div>{props.name}- {props.age}</div>
            }
        </ReactSort>);
    }

    renderHeader(utils, sortOptions, dataSource) {
        return (<div>
            Sory By - {sortOptions.sortField}
            <br/>
            <button onClick={this.sortAscending.bind(this)}>
                ASC
            </button>
            <button onClick={this.sortDescending.bind(this)}>
                DES
            </button>
        </div>);
    }

    sortAscending() {
        const sortOptions = this.state.sortOptions;
        sortOptions.sortDir = "asc";
        this.setState({ sortOptions });
    }

    sortDescending() {
        const sortOptions = this.state.sortOptions;
        sortOptions.sortDir = "des";
        this.setState({ sortOptions });
    }
}