import React, { Component } from 'react';
import { connect } from 'react-redux';


class EditComponent extends Component {
handleEdit = (event) => {
  event.preventDefault();
  const newTitle = this.getTitle.value;
  const data = {
    newTitle,
    
  }
  this.props.dispatch({ type: 'UPDATE', id: this.props.post.id, data: data })
}
render() {
return (
<div>
  <form  onSubmit={this.handleEdit}>
  <div className="form-group">
                <div className="col-md-8 m-auto">
    <input className="form-control" required type="text" ref={(input) => this.getTitle = input}
    defaultValue={this.props.post.title} placeholder="What needs to be done" /><br /><br />
    <button className="btn btn-success form-control">Update</button>
    </div>
    </div>
  </form>
</div>
);
}
}
export default connect()(EditComponent);


