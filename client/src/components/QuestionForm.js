import React , {Component} from "react";
import "../App.css";
import axios from 'axios';

class QuestionForm extends Component {

  state = {
    question: "",
    answer: "",
    company: "",
    questionType: "",
    user: ""
  };

  componentDidMount() {
    this.saveMyQuestion();
  }

  saveMyQuestion = () => {
    axios.post("api/user/savedQuestions");
  }

  render() {
    return ( 
      <div className="ui container">
            <form className="ui form">
                <div className="field">
                  <label className="formLabel">Question: </label>
                  <textarea placeholder="Please submit the question here. (Required) " type="text"></textarea>
                </div>
                <div className="field">
                  <label className="formLabel">Answer: </label>
                  <textarea placeholder="Please submit the question answer here. (Required) " type="text"></textarea>
                </div>
                <div className="field">
                  <label className="formLabel">Company: </label>
                  <input placeholder="Company (if applicable)" type="text"></input>
                </div>
                <div className="field">
                  <label className="formLabel">Question Category: </label>
                  <select className="ui search dropdown">
                    <option value="">Select Category (Required)</option>
                    <option value="javascript">Javascript</option>
                    <option value="behavioral">Behavioral</option>
                    <option value="node">Node</option>
                    <option value="react">React</option>
                    <option value="express">Express</option>
                    <option value="algorthims">Algorthims</option>
                    <option value="AO"></option>
                    <option value="AI">Anguilla</option>
                    <option value="AQ">Antarctica</option>
                    <option value="AG">Antigua and Barbuda</option>
                    <option value="AR">Argentina</option>
                  </select>
                </div>
                <div className="ui submit button">Submit Question</div>
            </form> 
        </div>
    );
  }
}

export default QuestionForm;