import React from 'react';
import './BusLine.css';

class BusLine extends React.Component {
    getTimeColor = (time) => {
        return '#fff';
    }

    render() {
        const info = this.props.info;
        return (
            <div className='busline'>
                <h1 className='busline-number'>{info.number}</h1>
                <h1 className='busline-direction'>{info.direction}</h1>
                <i className='material-icons'>accessible</i>
                <i className='material-icons'>ac_unit</i>
                <i className='material-icons'>directions_bus</i>
                <p style={{color: this.getTimeColor(info.time_adv)}} className='busline-time'>{info.time_adv}</p>
            </div>
        )
    }
}

export default BusLine;