import React, { Component, Fragment } from 'react';
import { Statistics } from './Statistics/Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = e => {
    const { name } = e.target;

    this.setState(prevState => ({ [name]: prevState[name] + 1 }));

    // switch (e.targe.name) {
    //   case 'good':
    //     this.setState(prevState => ({ good: this.state.good + 1 }));
    //     break;

    //   case 'neutral':
    //     this.setState(prevState => ({ neutral: this.state.good + 1 }));
    //     break;

    //     case 'bad':
    //     this.setState(prevState => ({ bad: this.state.good + 1 }));
    //     break;

    //   default:
    //     break;
    // }
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100) || 0;
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <Fragment>
        <h1>Please leave feedback</h1>
        <button type="button" name="good" onClick={this.handleIncrement}>
          Good
        </button>
        <button type="button" name="neutral" onClick={this.handleIncrement}>
          Neutral
        </button>
        <button type="button" name="bad" onClick={this.handleIncrement}>
          Bad
        </button>
        <h2>Statistics</h2>
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback()}
          positiveFeedback={this.countPositiveFeedbackPercentage()}
        />
      </Fragment>
    );
  }
}
