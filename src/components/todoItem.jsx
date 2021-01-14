import React, { Component} from 'react';
import propTypes from 'prop-types'

class TodoItem extends Component {

    getStyle = () => {
        if(this.props.todo_item.completed){
            return {
                textDecorationLine: 'line-through'
            }
        }
        else{
            return {
                textDecorationLine: 'none'
            }
        }
        
    }

    cursorPointer = () =>{
        return {
            cursor: 'pointer'
        }
    }

    

    render() { 
        return ( 
            <div className="row">
                <div className="col-12 text-center">
                    <div className="row">
                        <div className="col-2 text-right">
                            <input type="checkbox" onChange={this.props.markChange.bind(this, this.props.todo_item.id)}
                            style={this.cursorPointer()}/>
                        </div>
                        <div className="col-7 text-left">
                            <span style={this.getStyle()}>{this.props.todo_item.title}</span>
                        </div>
                        <div className="col-1 text-right-right">
                            <i className="fas fa-pen-alt" style={this.cursorPointer()}></i>
                        </div>
                        <div className="col-1 text-right">
                            <i className="fas fa-minus-circle text-danger" 
                            onClick={this.props.delItem.bind(this, this.props.todo_item.id)} 
                            style={this.cursorPointer()}></i>
                        </div>
                    </div>
                </div>
                
            </div>
        
         );
    }

}
 
TodoItem.propTypes = {
    todo_item: propTypes.object
}



export default TodoItem;