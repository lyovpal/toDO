import React from 'react';
import './Container.css';
import ToDoList from './toDoList';

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVal: '',
      data: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    this.setState({ inputVal: e.target.value });
  }

  handleClick() {
    let id = 1;
    this.setState({
      data: [this.state.inputVal, ...this.state.data],
      inputVal: ""
    });
  }

  render() {
    return (
      <div className='center'>
        <h1>Todo list</h1>

        <input
          value={this.state.inputVal}
          type='text'
          className='field'
          placeholder=' add a new todo...'
          onChange={this.handleChange}
        />

        <div className='center'>
          <button type='submit' className='btn' onClick={this.handleClick}>
            Add
          </button>
        </div>
        {this.state.data && <ToDoList data={this.state.data} />}
      </div>
    );
  }
}

export default Container;
