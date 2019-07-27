import React, { Component }from 'react';
import '../App.css';
import axios from 'axios';
import Slider from 'react-slick';
import SaveBtn from './SaveBtn';

class Question extends Component {

  state = {
    questions: []
  }

  componentDidMount() {
    axios.get("/api/questions/")
    .then(res => {
      console.log(res.data) 
      this.setState({questions: res.data})}).catch(err => console.log(err))
      
  }
  
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    }

    return (
        <Slider {...settings}>
          {this.state.questions
            .map(question => (
              <div>{question.question}</div>
            ))}
          <SaveBtn />
          <div class="extra content">
              <span class="left floated like">
              <i class="thumbs up outline icon"></i>
              Helpful
              </span>
              <span class="right floated star">
              <i class="thumbs down outline icon"></i>
              Not Helpful
              </span>
          </div>
        </Slider>
    );
  }
}

export default Question;