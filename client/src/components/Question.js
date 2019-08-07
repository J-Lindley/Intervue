import React, { PureComponent, Fragment }from 'react';
import '../App.css';
import axios from 'axios';
import Slider from 'react-slick';
import SaveBtn from './SaveBtn';
import { connect } from "react-redux";
import * as actions from '../actions'; 

class Question extends PureComponent {

  state = {
    questions: [],
    userId: "null",
    showAnswer: false
  }

  componentDidMount() {
    axios.get("/api/questions/")
    .then(res => {
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
        this.props.fetchUser()
      }).catch(err => console.log(err))
    });
  }

  checkSaved = id => {
    const questionSaved = this.props.auth.saved;
    const isSaved = questionSaved.find(qid => {
      return id === qid;
    })
    return isSaved;
  }

  showAnswer = () => {
    console.log("I've been clicked")
    this.setState({showAnswer: true});
  }

  
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      beforeChange: () => {
        this.setState({showAnswer: false})
      }
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
                <h3>{this.state.showAnswer ? question.answer : 
                <button className="ui primary button" onClick={this.showAnswer}>Click for answer</button>}</h3>
                {this.props.auth ? <SaveBtn qid={question._id} onClick={ () => this.saveQuestion(question._id)} isSaved={this.checkSaved(question._id)}/> : ""}
              </div>
            ))}
        </Slider>
        </Fragment>
    );
  }
}

function mapStateToProps({auth}) {
  return { auth };
}

export default connect(mapStateToProps, actions) (Question);