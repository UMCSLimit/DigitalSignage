import React from 'react';
import axios from 'axios';

class ZTM extends React.Component {
  constructor() {
      super();
<<<<<<< HEAD

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
=======
>>>>>>> cd1e9386e5037df122d56f52760d7b11853233ab
  }  

  render() {
      const { index, ...props } = this.props;

      return (
          <div>

          </div>
      )
  }
}

export default ZTM;