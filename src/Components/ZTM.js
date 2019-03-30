import React from 'react';
import './BusLine';
import BusLine from './BusLine';

class ZTM extends React.Component {
    getBusLines() {
        let BreakException = {};
        let busLineList = [];
        try {
            this.props.buses.forEach((element, i) => {
                if(i === 5) throw BreakException;
                busLineList.push(
                    <BusLine 
                        key={i}  
                        info={element}
                    />);
            });
        } catch (e) {}
        return busLineList;
    }

    render() {
        const { index, ...props } = this.props;
        const buses = this.getBusLines();
        return (
            <div>
                <h1>{props.line}</h1>
                {buses}
            </div>
      )
  }
}

export default ZTM;