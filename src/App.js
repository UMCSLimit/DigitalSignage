import React, { Component } from 'react';
import './App.css';
import Slider from 'react-slick';

import axios from 'axios';
import UMCS from './Components/UMCS';
// import ZTM from './Components/ZTM';
import Instagram from './Components/Instagram';
import Footer from './Components/Footer';

class App extends Component {
  constructor() {
    super();

    this.state = {
      index: 0,
      response: 0,
      data: [],
      instaData: []
    }
  }

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

  componentWillMount() {
    axios.get('http://localhost:3001/news')
      .then(({data}) => {
          this.setState({
          response: data.success,
          data: data.payload
          })
      })
      .catch(function(error) {
          console.log(error);
      })

      axios.get('http://localhost:3001/instagram')
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
      autoplaySpeed: 3000,
      autoplay: true
    };

    return (
      <Slider {...settings}>
        <div>
          <h1>Siemanko</h1>
        </div>
        {0 && newsUmcs.length && newsUmcs}
        {photosInstagram.length && photosInstagram}
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
