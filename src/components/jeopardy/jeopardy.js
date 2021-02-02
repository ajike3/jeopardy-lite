import React, { Component } from 'react';
import JeopardyService from "../../JeopardyService.js";

class Jeopardy extends Component {
  constructor(props){
    super(props);
    this.client = new JeopardyService();
    this.state = {
      data: null,
      score: 0,
      answer: ""
    }
  }

  getNewQuestion() {
    return this.client.getQuestion().then(result => {
      this.setState({
        data: result.data
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
    return (
      <div className="jeopardyContainer">
        {this.state.data && (
            <div>
                {this.state.data.map((item, id) => {
                    return (
                        <div key={id}>
                            <h2>Category: {item.category.title}</h2>
                            <h2>Question: {item.question}</h2>
                            <h2>Worth: ${item.value}</h2>
                        </div>
                   )
                })}
            </div>
            )}

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
