import React from 'react';
import axios from 'axios';

class UMCS extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        const { index, ...props } = this.props;

        return (
            <div>
                <h1>{props.title}</h1>
                <img src={props.url} />
            </div>
        )
    }
}

export default UMCS;