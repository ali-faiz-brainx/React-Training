import React, { Component } from 'react';
import TodoItem from './todoItem'
import propTypes from 'prop-types'

class TodoList extends Component {
    
    

    render() {
        if(this.props.todo_list.length!=0){
            return ( 
                this.props.todo_list.map((todo) => (
                        <TodoItem key={todo.id} todo_item={todo} markChange={this.props.markChange} 
                        delItem={this.props.delItem} edit={this.props.edit}/> 
                ))
             );
        }
        else{
            return (
                <span className="font-weight-bolder">Start by adding your 1st todo in list.</span>
            );
        }
        
    }
}

TodoList.propTypes = {
    todo_list: propTypes.array
}
 
export default TodoList;