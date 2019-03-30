import React from 'react';
import axios from 'axios';

class ZTM extends React.Component {
  constructor() {
      super();

      this.state = {
          response : false,
          data: [],
          child: null
        }
  }

  componentWillMount() {
      axios.get('http://localhost:3001/ztm')
      .then(({data}) => {
          this.setState({
          response: data.success,
          data: data.payload
          });
          this.makeChild();
      })
      .catch(function(error) {
          console.log(error);
      })
  }
  
  makeChild() {
      const child = this.state.data.map((el, index) => {
      return <div key={index}>
          <h3>{el.title}</h3>
          <img src={el.url} alt='ztm'/>
      </div>
      });

      this.setState({
          child: child
      }) 
  }  

  render() {
      return (
          <React.Fragment>
              {this.state.child}
          </React.Fragment>
          
      )
  }
}

export default ZTM;