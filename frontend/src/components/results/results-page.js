import React, { Component } from 'react';
import FilterBtn from './results-filter-btn';
import FilterModal from './results-filter-modal';

class Results extends Component {
    constructor(props) {
        super(props)

    }
    render(){
        return(
            <div>
                <FilterBtn />
            </div>
        )
    }
}



export default Results;