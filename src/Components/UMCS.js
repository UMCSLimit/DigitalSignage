import React from 'react';

class UMCS extends React.Component {
    render() {
        const { index, ...props } = this.props;

        return (
            <div>
                <h1>{props.title}</h1>
                <img src={props.url} alt='UMCS news' />
            </div>
        )
    }
}

export default UMCS;