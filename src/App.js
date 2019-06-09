import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './App.css';

const todolist = [
  {
    task : 'Run',
    id : Date.now(),
    completed : false
  },
  {
    task : 'Meditate',
    id : Date.now(),
    completed : false
  },
  {
    task : 'Yoga',
    id : Date.now(),
    completed : false
  },
];

class App extends React.Component {
  constructor (props){
    super(props);
    this.state = {
      todolist: todolist,
      task: ''
    }
  }

  inputChangeHandler = event =>{
    this.setState({[event.target.name]: event.target.value});
  }

  formSubmitHandler = event => {
    event.preventDefault();
    this.setState(prevState => {
      return {
        todoList : [
          ...prevState.todoList,
          {
            task: prevState.task,
            id: Date.now(),
            completed: false
          }
        ],
        task: ''
      }
    });
  }

  toggleTask = taskId => {
    this.setState(prevState => {
      return {
        todoList: prevState.todoList.map(taskItem => {
          if (taskItem.id === taskId) {
            return {
              task: taskItem.task,
              id: taskItem.id,
              completed: !taskItem.completed
            }
          }
          else{
            return taskItem;
          }
        })
      }
    });
  }
  clearCompleted = () => {
    this.setState(prevState => {
      return{
        todoList:prevState.todoList.filter(taskItem => {
          return !taskItem.completed;
        })
      }
    });
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className = "app">
        <div className = "topSection">
         <h1>Todo List</h1>
        </div>
        <div classname ="todoForm">
         <TodoForm
          task = {this.state.task}
          inputChangeHandler = {this.inputChangeHandler}
          formSubmitHandler = {this.formSubmitHandler}
        />
          <button className = "clear" onClick = {this.clearCompleted}>Clear completed</button>
        </div>
         <TodoList
          todoList = {this.state.todoList}
          toggleTask = {this.toggleTask}
        />
      </div>
        
      
    );
  }
}

export default App;
