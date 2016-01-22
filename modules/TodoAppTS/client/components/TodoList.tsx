import React from 'react';
import TodoItem from './TodoItem';

interface Props {
  isRequired?: boolean,
  tasks: any
}

export default class TodoList extends React.Component<Props, {}> {

  render() {
    return (
      <ul>
        {this.props.tasks.map((task: any) => <TodoItem key={task._id} task={task} />)}
      </ul>
    );
  }
}
