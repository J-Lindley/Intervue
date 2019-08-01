import React, {Component}from 'react';
import '../App.css';
import axios from 'axios';
import Slider from 'react-slick';
import SaveBtn from './SaveBtn';

class QuestionType extends Component {

  state={
    category: "Javascript",
    questions:[]
  }

  componentDidMount() {
    axios.get("/api/questions/category/" + this.state.category)
    .then(res => {
      console.log(res.data) 
      this.setState({questions:res.data})}).catch(err => console.log(err))
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
                <h2 className="questionLabel"> {question.questionType} Questions </h2>
                <h1>{question.question}</h1>
                <h2 className="questionLabel"> Answer </h2>
                <h1>{question.answer}</h1>
                <SaveBtn />
                <div className="extra content">
                  <span className="left floated" id="thumbsUp">
                  <i className="thumbs up outline icon"></i>
                  Helpful
                  </span>

                  <span className="right floated" id="thumbsDown">
                  <i className="thumbs down outline icon"></i>
                  Not Helpful
                  </span>
                </div>
              </div>
            ))}
        </Slider>
    )
  }

}

export default QuestionType;