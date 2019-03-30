import React from 'react';
import './BusLine.css';

class BusLine extends React.Component {
    render() {
        const info = this.props.info;
        return (
            <div className='busline'>
                <h1>{info.number}</h1>
                <p>{info.time_adv}</p>
            </div>
        )
    }
}

export default BusLine;