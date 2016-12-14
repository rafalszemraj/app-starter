import React, { Component, PureComponent } from 'react';
import { connect } from 'react-redux'
import R from 'ramda';

const mapStateToProps = state => ({ items: state.items });

class TodoItem extends PureComponent {

  constructor() {
    super();
    this.onClick = this.onClick.bind(this);
  }

  onClick() {

    this.props.onUpdate(this.props.id);

  }

  render() {
    const {text, id, onUpdate} = this.props;
   return <div>
      {text}
      <button onClick={this.onClick}>
        update
      </button>
    </div>
    ;
  }
}

class Main extends Component {


  constructor() {
    super();
    this.update = this.update.bind(this);
  }

  update(id) {
    this.props.dispatch( { type:'UPDATE', payload:{ id }})
  }

  render() {

    return (
      <div>
        <div>List</div>
        <div>
          {this.props.items.map(props => <TodoItem key={props.id} {...props} onUpdate={this.update}/>)}
        </div>
      </div>);
  }


}

export default connect(mapStateToProps)(Main);
