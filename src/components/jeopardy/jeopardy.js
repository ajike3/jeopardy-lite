import React, { Component } from 'react';
import JeopardyService from "../../JeopardyService.js";

class Jeopardy extends Component {
  constructor(props){
    super(props);
    this.client = new JeopardyService();
    this.state = {
      data: {},
      score: 0,
      answer: ""
    }
  }

  getNewQuestion() {
    return this.client.getQuestion().then(result => {
      this.setState({
        data: result.data[0]
      })
    })
  }

  componentDidMount() {
    this.getNewQuestion();
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let value = this.state.data[0].value;
    let currentScore = this.state.score;

    if(this.state.answer.toLowerCase() ===
        this.state.data[0].answer.toLowerCase()) {
            this.setState({
                score : value + currentScore
            })
        }
        else{
            this.setState({
                score : currentScore - value
            })
        }
    this.getNewQuestion();

  }

  handleChange = (event) => {
    event.preventDefault();  
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    if(!this.state.data.category){
      return ( <div> Loading... </div> )
    }
    return (
      <div className="jeopardy-container">
              <div>
                  <h2>Category: {this.state.data.category.title}</h2>
                  <h2>Question: {this.state.data.question}</h2>
                  <h2>Worth: ${this.state.data.value}</h2>
              </div>
            </div>
            )

        <h2>Score: ${this.state.score}</h2>
        
        <div>
            <form onSubmit={this.handleSubmit}>
                <label>Answer: </label>
                <input 
                    type="text" 
                    name="answer"
                    value={this.state.answer}
                    onChange={this.handleChange}
                />
                <button>Submit</button>
            </form>
        </div>
    </div>
    );
  }
}
export default Jeopardy;
