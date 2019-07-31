import React, { Component } from 'react';
import {connect} from 'react-redux';
import {FaTrash, FaEdit} from 'react-icons/fa';

class Post extends Component {
    render() {
        return (
            <div>
<h2>{this.props.post.title}</h2>
<p>{this.props.post.message}</p>
<div className="d-flex justify-content-between">
<button className="btn btn-warning but" onClick={()=>this.props.dispatch({type:'EDIT_POST', id:this.props.post.id})}><FaEdit /></button>
<button className="btn btn-danger but"  onClick={()=>this.props.dispatch({type:'DELETE_POST',id:this.props.post.id})}><FaTrash /></button>
</div>
            </div>
        )
    }
}

export default connect()(Post);