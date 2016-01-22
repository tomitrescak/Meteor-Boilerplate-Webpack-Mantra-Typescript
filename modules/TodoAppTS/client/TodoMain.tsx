import React from "react";
import ReactMixin from "react-mixin";
//import ReactMeteorData from "react-meteor-data";

import TodoHeader from "./components/TodoHeader";
import TodoList from "./components/TodoList";

import Tasks from "../collections/Tasks";

interface State {
  hideCompleted: boolean;
}

@ReactMixin.decorate(ReactMeteorData)
export default class TodoMain extends React.Component<{}, State> {
  data: any;

  state = {
    hideCompleted: false
  };

  getMeteorData() {
    Meteor.subscribe("tasks");

    let taskFilter = {
      checked: {}
    };

    if (this.state.hideCompleted) {
      taskFilter.checked = {$ne: true};
    }

    const tasks = Tasks.find(taskFilter, {sort: {createdAt: -1}}).fetch();
    const incompleteCount = Tasks.find({checked: {$ne: true}}).count();

    return {
      tasks,
      incompleteCount,
      user: Meteor.user()
    };
  }

  handleToggleHideCompleted = (e: any) => {
    this.setState({ hideCompleted: e.target.checked });
  };

  render() {
    if (!this.data.tasks) {
      // loading
      return null;
    }

    return (
        <div className="container">
          <TodoHeader
              incompleteCount={this.data.incompleteCount}
              hideCompleted={this.state.hideCompleted}
              toggleHideCompleted={this.handleToggleHideCompleted}
          />
          <TodoList tasks={this.data.tasks} />
        </div>
    );
  }
};
