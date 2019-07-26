import React, {Component, Fragment}from 'react';
import { connect } from "react-redux";
import '../App.css';
import CategoryContainer from '../components/CategoryContainer';
import SaveBtn from '../components/SaveBtn';
import axios from "axios";
import Slider from "react-slick";
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
}


class QuestionsPage extends Component {
  
  state={
    category:"javascript",
    questions:[]
  }
  componentDidMount() {
    axios.get("/api/questions/category/" + this.state.category)
    .then(res => {
      console.log(res.data) 
      this.setState({questions:res.data})}).catch(err => console.log(err))
  }
  
  render() {
    return (
      <Fragment>
        <div className="ui grid">
          <div className="three wide column" id="categoryColumn">
              <CategoryContainer />
          </div>
          <div className="ten wide column" id="questionCardContainer">

              <div class="ui card" id="questionCard">
                <div class="content">
                  <div class="header" id='questionTitle'> Interview Question: </div>
                  <div class="header"> If we wanted to implement a method of tracking every click that the user made on the site, how would we want to do this?</div>
                  <div class="header" id='questionAnswerTitle'> Interview Answer: </div>
                  <div class="description">
                  <p>SEE ANSWER</p>
                  </div>
                </div>
                <div class="extra content">
                  <SaveBtn />
                </div>
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
          <div className="item">Behavioral</div>
          <div className="item">JavaScript</div>
          <div className="item">Java</div>
          <div className="item">React</div>
        </div>
        
        <div>
          <button class="ui right labeled icon button" id="nextBtn">Next
          <i class="right arrow icon"></i>
          </button>
        </div>
        <Slider {...settings}>
          {
            this.state.questions.map(question=> (
              <div>
                {
                  question.question
                }
              </div>
            ))
          }
         </Slider>
        <div class="ui card" id="questionCard">
            <div class="content">
            <div class="header" id='questionTitle'> Interview Question: </div>
            <div class="header"> If we wanted to implement a method of tracking every click that the user made on the site, how would we want to do this?</div>
            <div class="header" id='questionAnswerTitle'> Interview Answer: </div>
              <div class="description">
              <p>SEE ANSWER</p>
              </div>

              <div>
                <button class="ui left labeled icon button" id="previousBtn">Previous
                <i class="left arrow icon"></i>
                </button>
              </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps) (QuestionsPage);
