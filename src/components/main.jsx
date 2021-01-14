import React, { Component } from 'react';
import TodoList from './todoList'
import AddTodo from './addTodo'
import {v4 as uuid} from 'uuid'

class Main extends Component {
    state = { 
        todos: []
     }

     markChange = (id) =>{
        this.setState(this.state.todos.map(todo => {
            if(todo.id===id){
                todo.completed=!todo.completed;
            }
        }))
    }

    delItem = (id) =>{
        this.setState({todos: [...this.state.todos.filter(todo => todo.id !=id)]});
    }

    addTodo = (title) =>{
        const newTodo = {
            id: uuid(),
            title: title,
            completed: false
        }
        this.setState({todos: [...this.state.todos, newTodo]});

    }

    render() {
        return ( 
            <div className="container bg bg-light">
                <div className="text-center row p-5">
                    <div className="col-12">
                        <div className="row">
                            <h1 className="col-12">TodoList</h1>
                        </div>
                        <div className="row">
                            <div className="col-7 mx-auto">
                            <AddTodo addTodo={this.addTodo}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-7 mx-auto">
                                <TodoList todo_list={this.state.todos} markChange={this.markChange} 
                                delItem={this.delItem}/>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
         );
    }
}
 
export default Main;