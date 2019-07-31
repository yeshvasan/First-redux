import React, { Component } from 'react';
import { connect } from 'react-redux';


class EditComponent extends Component {
handleEdit = (event) => {
  event.preventDefault();
  const newTitle = this.getTitle.value;
  const newMessage = this.getMessage.value;
  const data = {
    newTitle,
    newMessage
  }
  this.props.dispatch({ type: 'UPDATE', id: this.props.post.id, data: data })
}
render() {
return (
<div>
  <form  onSubmit={this.handleEdit}>
  <div className="form-group">
                <div className="col-md-8 m-auto">
    <input className="input form-control" required type="text" ref={(input) => this.getTitle = input}
    defaultValue={this.props.post.title} placeholder="Enter Post Title" /><br /><br />
    <textarea className="form-control input" required rows="5" ref={(input) => this.getMessage = input}
    defaultValue={this.props.post.message} cols="28" placeholder="Enter Post" /><br /><br />
    <button className="btn btn-success form-control button">Update</button>
    </div>
    </div>
  </form>
</div>
);
}
}
export default connect()(EditComponent);

