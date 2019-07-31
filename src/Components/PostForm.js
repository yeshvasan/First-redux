import React, { Component } from 'react';
import {connect} from 'react-redux';

class PostForm extends Component {
    handleSubmit = (event) => {
       event.preventDefault();
        const title = this.getTitle.value;
        const message = this.getMessage.value;
        const data = {
            id: new Date(),
            title, 
            message,
            editing:false
            
        }
        
        this.props.dispatch({
            type:'ADD_POST',
            data});
        this.getTitle.value='';
        this.getMessage.value='';
    }
    render() {
        return (
            <React.Fragment>
            <div className="container">
            <div className="row">
            <div className="col-md-8 m-auto">
            <div class="card border border-danger bo  m-2 mt-5 p-4">

                <h1>Create Post</h1>
                <form className="form-horizontal" onSubmit = {this.handleSubmit}>
                <div className="form-group">
                <div className="col-md-8 m-auto">
                <input className="input form-control" required type="text" ref={(input) =>this.getTitle = input} placeholder="Post Title" /><br /><br />
                    <textarea className="form-control input" required rows="5" ref={(input) => this.getMessage=input} cols="28" placeholder="Post" /><br /><br />
                    <button className="btn btn-success form-control button">Post</button>
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