import React, {PureComponent, Fragment}from 'react';
import '../App.css';
import { connect } from "react-redux";
import Slider from 'react-slick';
import SaveBtn from './SaveBtn';

class QuestionType extends PureComponent {

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    }

    return (
      <Fragment>
      <Slider {...settings} id="questionBox">
          {this.props.category.questions.length ? this.props.category.questions.map(question => (
              <div>
                <h2 className="questionLabel"> {question.questionType} Questions </h2>
                <h3>{question.question}</h3>
                <h2 className="questionLabel"> Answer </h2>
                <h3>{question.answer}</h3>
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
            )): ""}
        </Slider>
      </Fragment>
    )
  }

}

function mapStateToProps({ category }) {
  return { category };
}

export default connect(mapStateToProps) (QuestionType);