import React, { Component } from 'react';
import {connect} from 'react-redux';
import Post from './Post';
import EditComponent from './EditComponent';

class AllPost extends Component {
    render() {
        return (
            
          
            <div className="container">
            <div className="row">
            <div className="col-md-8 m-auto">
            <div class="card border border-danger bo  m-2 mt-5 p-4">
                <h1>All Post</h1>
                {this.props.posts.map((post)=>
                (
                    <div key={post.id}>
                    {post.editing?<EditComponent post={post} key={post.id} />:<Post key={post.id} post={post} />}

                    </div>
                ))}
                
                </div>
                </div>
                </div>
                
            </div>
        )
    }
}

const mapStateToProps =(state) => {
    return { 
        posts:state 
    }
}

export default connect(mapStateToProps)(AllPost);