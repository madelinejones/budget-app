import React from "react";
import { Component } from "react";
import "./App.css";

class Expense extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expense: null,
      description: null
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
      // This is the syntax for changing the object's values
    });
  }

  render() {
    return (
        <form onSubmit={this.props.addItem}>
            <input
              type="text"
              name="expense"
              value={this.state.expense}
              placeholder="Expense"
              onChange={this.handleInputChange}
            />
            <input
              type="text"
              name="description"
              value={this.state.description}
              placeholder="Description"
              onChange={this.handleInputChange}
            />
            <button type="submit" value="Add" />
        </form>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <Expense />
        {/* <ExpenseList entries={this.state.expense} /> */}
      </div>
    );
  }
}

export default App;
