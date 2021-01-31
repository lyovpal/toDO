import React from "react";
import "./toDo.css"

class ToDoList extends React.Component {
    constructor(props){
      super(props)
        this.state = {
            toDoData: []
        }
    }

    render() {
       return (
      <div className="toDo">
        {this.props.data && this.props.data.map((item) => <div><p>{item}</p> <img src="./images/delete" alt="delete"/></div> )}
      </div>
    );
  }
}

export default ToDoList;
