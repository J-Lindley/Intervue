import React, {PureComponent, Fragment}from 'react';
import '../App.css';
import { connect } from "react-redux";
import Slider from 'react-slick';
import SaveBtn from './SaveBtn';

class QuestionType extends PureComponent {

  // state={
  //   category: this.props.category.category,
  //   questions:[]
  // }

  // componentDidMount() {
  //   axios.get("/api/questions/category/" + this.state.category)
  //   .then(res => {
  //     console.log(res.data) 
  //     this.setState({questions:res.data})}).catch(err => console.log(err))
  // }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    }
    console.log("question type props")
    console.log(this.props)

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