import React from 'react';
import './BusLine';
import BusLine from './BusLine';
import axios from 'axios';
import BACKEND_URL from './../api/api';

class ZTM extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            apiInterval: null,
            loaded: false,
            busInfo: {}
        }
    }

    // apiZTM = () => {
    //     axios.get(BACKEND_URL + 'ztm/' + String(this.props.id))
    //     .then(({data}) => {
    //         this.setState({busInfo: data, loaded: true})
            
    //     })
    //     .catch((error) => {
    //         console.log(error);
    //     })
    // }

    componentWillMount() {
        // console.log('Hej <Ztm>')
        // this.apiZTM();
        this.busInfo = this.props.ZTMData;
        // this.setState({ apiInterval: setInterval(this.apiZTM, 2000)});
    }

    componentWillUnmount() {
        // clearInterval(this.state.apiInterval);
        // this.setState({apiInterval: null});
    }

    getBusLines() {
        let buses = [];
        if(this.state.loaded)
            buses = this.state.busInfo.payload;
        let BreakException = {};
        let busLineList = [];
        try {
            buses.forEach((element, i) => {
                if(i === 8) throw BreakException;
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
        // const { index, ...props } = this.props;
        const { busInfo } = this.state;
        const buses = this.getBusLines();
        return (
            <div className='ZTM'>
                <div className='ZTM-header'>
                    {
                        this.state.loaded 
                        &&
                        <h1>{busInfo.info.time}</h1>
                    }
                    {
                        this.state.loaded 
                        && 
                        <h1 className='ZTM-header-name'>{busInfo.info.name}</h1>
                    }
                </div>
                {buses}
            </div>
      )
  }
}

export default ZTM;