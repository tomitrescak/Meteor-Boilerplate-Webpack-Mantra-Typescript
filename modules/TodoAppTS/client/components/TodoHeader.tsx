import React from "react";
//import BlazeToReact from "blaze-to-react";
//import '/client/img/check.png';

const LoginButtons = BlazeToReact("loginButtons");

interface Props {
  hideCompleted: boolean;
  toggleHideCompleted: any;
  incompleteCount: Function;
}

export default class TodoHeader extends React.Component<Props, {}> {
  // static propTypes = {
  //   hideCompleted: PropTypes.bool,
  //   toggleHideCompleted: PropTypes.func.isRequired,
  //   incompleteCount: PropTypes.number.isRequired
  // }

  handleSubmit(event: any) {
    // Prevent default browser form submit
    event.preventDefault();

    // Get value from form element
    var text = event.target.text.value;

    // Insert a task into the collection
    Meteor.call("addTask", text);

    // Clear form
    event.target.text.value = "";
  }

  render() {
    let form: any = null;

    if (Meteor.userId()) {
      form = (
        <form className="new-task" onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" name="text" placeholder="Type to add new tasks" />
        </form>
      );
    }

    return (
      <header>
        <h1>
          Todo List ({this.props.incompleteCount})
        </h1>

        <label className="hide-completed">
          <input type="checkbox" checked={this.props.hideCompleted} onChange={this.props.toggleHideCompleted} />
          Hide Completed Tasks
        </label>

        <LoginButtons />

        {form}
      </header>
    );
  }
}
