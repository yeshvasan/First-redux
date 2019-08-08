import React, { Component } from 'react';
import {connect} from 'react-redux';

class PostForm extends Component {
    handleSubmit = (event) => {
       event.preventDefault();
        const title = this.getTitle.value;
        
        const data = {
            id: new Date(),
            title, 
            editing:false,
            completed:false
            
        }
        
        this.props.dispatch({
            type:'ADD_POST',
            data,
        });
        this.getTitle.value='';
        
    }
    render() {
        return (
            <React.Fragment>
            <div className="container">
            <div className="row">
            <div className="col-md-12 m-auto">
            <div className="card border border-danger m-2 mt-5 p-4">

                <form onSubmit = {this.handleSubmit}>
                <div className="form-group">
                <div className="col-md-10 m-auto">
                <input className="form-control" required type="text" ref={(input) =>this.getTitle = input} placeholder="what needs to be done?"  /><br /><br />
                    <button className="btn btn-success">Add Todo</button>
                    </div>

                    </div>
                </form> 
                
            </div>
            </div>
            </div>
            </div>
            </React.Fragment>
        )
    }
}

export default connect()(PostForm);
