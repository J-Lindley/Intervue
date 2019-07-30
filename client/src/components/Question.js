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
        <Slider {...settings} id="questionBox">
          {this.state.questions
            .map(question => (
              <div>
                <h2 className="questionLabel"> Question </h2>
                <h3>{question.question}</h3>
                <h2 className="questionLabel"> Answer </h2>
                <h3>{question.answer}</h3>
                <SaveBtn />
                <div class="extra content">
                  <span class="left floated" id="thumbsUp">
                  <i class="thumbs up outline icon"></i>
                  Helpful
                  </span>

                  <span class="right floated" id="thumbsDown">
                  <i class="thumbs down outline icon"></i>
                  Not Helpful
                  </span>
                </div>
              </div>
            ))}
        </Slider>
    );
  }
}

export default Question;