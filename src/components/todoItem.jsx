import React, { Component} from 'react';
import propTypes from 'prop-types'

class TodoItem extends Component {

    state = {
        update: false,
        title: this.props.todo_item.title
    }

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

    editTodo = () =>{
        this.setState({update: true});
    }

    cursorPointer = () =>{
        return {
            cursor: 'pointer'
        }
    }

    onChange = (e) =>{
        this.setState({title : e.target.value})
    }

    onKeyUp = (e) => {
        e.preventDefault();
        this.props.edit(this.props.todo_item.id, this.state.title);
        this.setState({update : false});
        
    }

    render() { 
        const hideMe=this.state.update ? 'd-none' : 'd-block';
        const showMe=this.state.update ? 'form form-control d-block' : 'form form-control d-none';
        return ( 
            <div className="row">
                <div className="col-12 text-center">
                    <div className="row">
                        <div className="col-1 text-right my-auto">
                            <input type="checkbox" onChange={this.props.markChange.bind(this, this.props.todo_item.id)}
                            style={this.cursorPointer()}/>
                        </div>
                        <div className="col-9 text-left py-2 my-auto">
                            <span style={this.getStyle()} className={hideMe}>{this.props.todo_item.title}</span>
                            <form onSubmit={this.onKeyUp}>
                            <input type="text" className={showMe} value={this.state.title} 
                             onChange={this.onChange}/>
                            </form>

                        </div>
                        <div className="col-1 text-right-right my-auto">
                            <i className="fas fa-pen-alt text-primary" style={this.cursorPointer()}
                            onClick={this.editTodo}></i>
                        </div>
                        <div className="col-1 text-right my-auto">
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