import React, { Component } from 'react';
import './App.css';
import Slider from 'react-slick';
import 'material-design-icons/iconfont/material-icons.css';
import axios from 'axios';
import UMCS from './Components/UMCS';
import Instagram from './Components/Instagram';
import Footer from './Components/Footer';
import ZTM from './Components/ZTM';
import BACKEND_URL from './api/api';

class App extends Component {
  constructor() {
    super();

    this.state = {
      index: 0,
      response: 0,
      data: [],
      instaData: [],
      ztmIndexes: [573, 811],
      ztmComponents: [],
      ZtmInfo: []
    }
  }

  // reqZTM = (i) => {
  //   return axios.get(BACKEND_URL + 'ztm/' + String(this.state.ztmIndexes[i]));
  // }

  forUMCS() {
    let news = [];
    try {
      for (let i = 0; i < this.state.data.length; i++) {
        let currentNews = this.state.data[i];
        news.push(
          <UMCS 
            url={currentNews.url} 
            title={currentNews.title}
            index={i}
          />);
      }
    } catch (error) {
      console.log(error);

    }
    return news;
  }

  forZTM() {
    for (let i = 0; i < this.state.ztmIndexes.length; i++) {
      let ztm = <ZTM 
        ZTMData={this.state.ZtmInfo[i]}
        key={i}
        id={this.state.ztmIndexes[i]}
        />
      this.setState(prevState => ({
        ztmComponents: [...prevState.ztmData, ztm]
      }))
    }
  }
  
  forInstagram() {
    let photos = [];
    try {
      for(let i = 1; i < this.state.instaData.length; i++) {
        let currentPhoto = this.state.instaData[i];
        photos.push(
          <Instagram 
            url={currentPhoto.photo_url} 
            caption={currentPhoto.caption}
            likes={currentPhoto.likes}
            index={i}
            />
        )
      }
    } catch (error) {
      console.log(error);
    }
    return photos;
  }

  componentDidMount() {
    axios.get(BACKEND_URL + 'news')
      .then(({data}) => {
          this.setState({
          response: data.success,
          data: data.payload
          })
      })
      .catch(function(error) {
          console.log(error);
      })

      axios.get(BACKEND_URL + 'instagram')
      .then(({data}) => {
          this.setState({
            instaData: data.payload
          })
      })
      .catch(function(error) {
          console.log(error);
      })
  }

  returnSlider() {
    let newsUmcs = this.forUMCS();
    let photosInstagram = this.forInstagram();

    var settings = {
      dots: true,
      fade: true,
      accessibility: false,
      arrows: false,
      autoplaySpeed: 5000,
      speed: 1000,
      autoplay: true
    };

    return (
      <Slider {...settings}>
        {newsUmcs.length && newsUmcs}
        {photosInstagram.length && photosInstagram}
        {this.state.ztmData && this.state.ztmData} 
      </Slider>
    )
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          {this.returnSlider()}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
