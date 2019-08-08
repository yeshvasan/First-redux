import React, { Component } from 'react';
import {connect} from 'react-redux';
import {FaTrash, FaEdit,FaBrush} from 'react-icons/fa';

class Post extends Component {
    render() {
        return (
            <div>
<h2>{this.props.post.title}</h2>
<div className="d-flex justify-content-around">
<button className="btn btn-warning but" onClick={()=>this.props.dispatch({type:'EDIT_POST', id:this.props.post.id})}><FaEdit /></button>
<button className="btn btn-danger but"  onClick={()=>this.props.dispatch({type:'DELETE_POST',id:this.props.post.id})}><FaTrash /></button>
<button className="btn btn-danger but"  onClick={()=>this.props.dispatch({type:'STATUS',id:this.props.post.id})}><FaBrush /></button>
</div>
            </div>
        )
    }
}

export default connect()(Post);
