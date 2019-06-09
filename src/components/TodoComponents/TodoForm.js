import React from "react";


class TodoForm extends React.Component {
  render(){
    return (
      <div className = 'taskAdder'>
        <form onSubmit = {this.props.formSubmitHandler}>
          <input
          type = "text"
          placeholder = "New Task"
          value = {this.props.task}
          onChange = {this.props.inputChangeHandler}
          />
          <button type = "submit">Add New Task</button>
        </form>
      </div>
    );
  }
}

export default TodoForm;


