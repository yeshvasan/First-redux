import React, { Component } from 'react';
import {connect} from 'react-redux';
import Post from './Post';
import EditComponent from './EditComponent';




class AllPost extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="col-lg-10 offset-lg-1 col-md-10 col-sm-10 col-xs-12 re">
           
            </div>
          
            <div className="container">
            <div className="row">
            <div className="col-md-8 m-auto">
            <div class="card border border-danger   m-2 mt-5 p-4">
                <h1>Todo List</h1>
                {this.props.posts.map((post)=>
                (
                    <React.Fragment>
                    <div key={post.id}>
                    {post.editing?<EditComponent post={post} key={post.id} />:<Post style={{color:post.completed?"green":"none"}} key={post.id} post={post} />}
                    
                    </div>
                   
                    </React.Fragment>
                ))}
                
                </div>
                </div>
                </div>
                
            </div>
            </React.Fragment>
        )
    }
}



const mapStateToProps =(state) => {
    return { 
        posts:state, 
    }
}



export default connect(mapStateToProps)(AllPost);
