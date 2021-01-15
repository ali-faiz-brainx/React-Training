import React, { Component } from 'react';

class AddTodo extends Component {
    state = { 
        title: ''
     }


     onSubmit = (e) =>{
        e.preventDefault();
         if(this.state.title){
            this.props.addTodo(this.state.title);
            this.setState({title: ''})
         }
         
     }

     onChange = (e) => {
         this.setState({[e.target.name]: e.target.value});
         
        }

    render() { 
        return ( 
            <div className="row">
                <div className="col-7 mx-auto">
                    <form onSubmit={this.onSubmit}>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" name="title" onChange={this.onChange}
                            value={this.state.title}/>
                            <div className="input-group-append">
                                <button className="btn btn-outline-secondary" type="submit">Add</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
         );
    }
}
 
export default AddTodo;