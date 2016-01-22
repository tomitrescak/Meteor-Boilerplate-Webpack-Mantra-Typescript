import TodoApp from "./TodoApp";
import TodoMain from "./TodoMain";

FlowRouter.route("/todo", {
  action() {
    ReactLayout.render(TodoApp, {
      children: <TodoMain />
    });
  }
});  
