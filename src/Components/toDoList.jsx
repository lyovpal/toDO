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
      <ul className="toDo">
        {this.props.data && this.props.data.map((item) => 
          <li><span>{item} <button type="button" className="close" onClick={this.onClickClose}>&times;</button></span> </li>
         )}
      </ul>
    );
  }
}

export default ToDoList;
