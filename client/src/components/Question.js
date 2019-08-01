import React, { Component, Fragment }from 'react';
import '../App.css';
import axios from 'axios';
import Slider from 'react-slick';
import SaveBtn from './SaveBtn';

class Question extends Component {

  state = {
    questions: [],
    userId: "null"
  }

  componentDidMount() {
    axios.get("/api/questions/")
    .then(res => {
      console.log(res.data) 
      this.setState({questions: res.data})}).catch(err => console.log(err));  
    }

  saveQuestion = id => {
    //first get and store user id
    axios.get("/api/current_user")
    .then(res => {
      console.log(res.data.googleId);
      console.log(id);
      
      let user = res.data.googleId;
      axios.put("api/user/saveQuestion", {qid: id, uid: user})
        .then(res => {
          console.log(res);
        })
    })
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
        <Fragment>

        <Slider {...settings} id="questionBox">
          {this.state.questions
            .map(question => (
              <div>
                <h2 className="questionLabel"> Question </h2>
                <h3>{question.question}</h3>
                <h2 className="questionLabel"> Answer </h2>
                <h3>{question.answer}</h3>
                <SaveBtn qid={question._id} onClick={ () => this.saveQuestion(question._id)}/>
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
        </Fragment>
    );
  }
}

export default Question;