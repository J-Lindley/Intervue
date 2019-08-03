import React, {Component, Fragment}from 'react';
import '../App.css';
import axios from 'axios';
<<<<<<< HEAD
=======
import { connect } from "react-redux";
>>>>>>> master
import Slider from 'react-slick';
import SaveBtn from './SaveBtn';

class QuestionType extends Component {

  state={
<<<<<<< HEAD
    category:"",
=======
    category: this.props.category.category,
>>>>>>> master
    questions:[]
  }

  componentDidMount() {
    axios.get("/api/questions/category/" + this.state.category)
    .then(res => {
      console.log(res.data) 
      this.setState({questions:res.data})}).catch(err => console.log(err))
  }

<<<<<<< HEAD
=======

>>>>>>> master
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    }
<<<<<<< HEAD
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
=======

    console.log(this.state)

    return (
      <Fragment>
      <Slider {...settings} id="questionBox">
          {this.state.questions.length ? this.state.questions.map(question => (
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
>>>>>>> master
                  Not Helpful
                  </span>
                </div>
              </div>
<<<<<<< HEAD
            ))}
        </Slider>
    )
  }

=======
            )): ""}
        </Slider>
        </Fragment>
    )
  }

}

function mapStateToProps({ category }) {
  return { category };
>>>>>>> master
}

export default connect(mapStateToProps) (QuestionType);