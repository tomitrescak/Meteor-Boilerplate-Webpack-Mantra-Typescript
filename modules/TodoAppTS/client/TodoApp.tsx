import React from "react";
//import "./css/TodoApp.import.css";

interface Prop {
  children: any
}

export default class TodoApp extends React.Component<Prop,{}> {
  // static propTypes = {
  //   children: React.PropTypes.any.isRequired
  // }

  componentWillMount() {
    require('./css/TodoApp.import.css');
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
