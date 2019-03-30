import React from 'react';

class ZTM extends React.Component {
  render() {
      const { index, ...props } = this.props;

      return (
          <div>
              <h1>{props.line}</h1>
          </div>
      )
  }
}

export default ZTM;